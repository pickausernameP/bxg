define(['jquery','ckeditor','template','uploadify','region','form',"datepicker","datepickerzh"],function ($,CKEDITOR,template){

    // 点开页面就要发送ajax请求，把相应的数据显示在当前页面上
    $.ajax({
        url:'/api/teacher/profile',
        type:'get',
        success:function (data){
            if(data.code ==200){
                var htmlStr = template('tc_profile_tpl',data.result);
                $('.settings').html(htmlStr);

                // 只有当前页面的模板渲染完成，生成了标签之后，下面的富文本编辑器或是三级联动才会有效果
                // 页面中添加富文本编辑器
                CKEDITOR.replace('ckeditor',{
                    toolbarGroups : [
                        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                        { name: 'links' },
                        { name: 'insert' },
                        { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
                        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] }
                    ]
                });
                // 三级联动的使用
                $('#region').region({
                    url:'/views/public/assets/jquery-region/region.json'
                });

                // 图片上传功能完成
                $("#upfile").uploadify({
                    swf:'/views/public/assets/uploadify/uploadify.swf',
                    uploader:'/api/uploader/avatar',
                    method:'post',
                    width:120,
                    height:120,
                    buttonText:'',
                    fileObjName:'tc_avatar',
                    onUploadSuccess:function(file, data, response){
                        // console.log(file);
                        // console.log(data); //是服务器返回来的数据，是一个字符串
                        // console.log(response);
                        // JSON.parse(data).result.path里面的信息是服务器返回的绝对路径
                        $("#img_avatar").attr('src',JSON.parse(data).result.path);
                    }
                });
                $("input[name=tc_birthday]").datepicker({
                    format:"yyyy-mm-dd",
                    language:"zh-CN"

                });
                $("input[name=tc_join_date]").datepicker({
                    format:"yyyy-mm-dd",
                    language:"zh-CN"

                });

                // 写日期插件的代码     出生日期    入职日期
            }//if
        }//success
    });//$.ajax




    //修改完毕之后，要保存当前页面的信息
    $(".settings").on('click','#saveBtn',function (){
        // $('[name=ckeditor]').val(CKEDITOR.instances.introduction.getData());
        //
        for(var instance in CKEDITOR.instances){
             CKEDITOR.instances[instance].updateElement(); // 更新富文本编辑器的状态
        }
        $('form').ajaxSubmit({
            url:'/api/teacher/modify',
            type:'post',
            success:function (data){
                if(data.code ==200){
                    alert('保存成功...');
                }
            }
        });
        return false;//阻止默认的刷新 行为
    });

})


