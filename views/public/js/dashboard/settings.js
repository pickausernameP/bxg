/**
 * Created by why on 2017/6/24.
 * 配置ckeditor路径，再看是否支持模块化，define  没有的话需要shim
 * 
 */
define(["jquery","ckeditor","template","region","uploadify","form"],function ($,CKEDITOR,template) {
    //点开页面就要发送Ajax请求，把相应的数据显示在页面上
    $.ajax({
        url:"/api/teacher/profile",
        type:"get",
        success:function (data) {
            if(data.code==200){
                 var htmlStr = template("tc_profile_tpl",data.result);
                 $(".settings").html(htmlStr)
                //富文本的编辑
                CKEDITOR.replace("textarea",{
                    toolbarGroups:[
                        { name: 'clipboard',groups:['clipboard','undo'] },
                        { name: 'links'},
                        { name: 'insert'},
                        { name: 'document',groups:['mode','document','doctools']},
                        { name: 'basicstyles',groups:['basicstyles','cleanup' ]}
                    ]
                });

                //省级联动级联动的使用
                $("#region").region({
                    url:"/views/public/assets/jquery-region/region.json"
                });


                //上传头像
                $("#upfile").uploadify({
                    "swf":"/views/public/assets/uploadify/uploadify.swf",
                    "uploader":"/api/uploader/avatar",
                    "width":120,
                    "height":120,
                    "buttonText":"",
                    "fileObjName":"tc_avatar",
                    "onUploadSuccess":function(file, data, response) {
                        //data是服务器返回一个字符串，把data转换为对象
                        //result.path里面的信息是服务器返回的绝对路径
                        $("#avatar").attr("src",JSON.parse(data).result.path)

                    }

                });

            }
        }
    })


});




