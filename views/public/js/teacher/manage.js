/**
 * Created by why on 2017/6/22.
 */
define(["jquery","template","js/utility","form","datepicker","datepickerzh"],function ($,template,utility,form,dp,zh) {

       //根据id发送请求，去服务器请求数据
    //判断一下，如果有id，说明是一个编辑功能，没有id就是添加功能
    if(utility.queryString().tc_id){
        $.ajax({
            url:'/api/teacher/edit',
            type:'get',
            data:{tc_id:utility.queryString().tc_id},
            success:function (res){
                if(res.code==200){
                    res.result.title = "讲师编辑";
                    res.result.saveBtnText = "保存"; //添加两个属性使页面更合理
                    var htmlStr = template('tc_edit_tpl',res.result);
                    // console.log(htmlStr);
                    $('.teacher').html(htmlStr);
                    // 加载日期插件,通过属性选择器
                    $("input[name=tc_join_date]").datepicker({
                        format:"yyyy-mm-dd",
                        language:"zh-CN"

                    });

                }
            }
        });
        submitAjax("/api/teacher/update")
    }
    else{
        var htmlStr = template("tc_edit_tpl",{
            title:"讲师添加",
            saveBtnText:"添加",
            tc_gender:1
        });
        $('.teacher').html(htmlStr);
        submitAjax("/api/teacher/add")
    }



  //添加和编辑都是提交数据，可以定义一个提交函数
function  submitAjax(url) {
    $(".teacher").on("click",".btnSave",function () {
        $("form").ajaxSubmit({
            url:url,
            type:"post",
            success:function (res) {
                alert("提交成功！");
                location.href="/teacher/teacher_list"
            }
        });
        return false;
    })
}

});

