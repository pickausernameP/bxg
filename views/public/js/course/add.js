/**
 * Created by why on 2017/6/25.
 */



define(["jquery","form"],function ($) {
    // var cs_id = utility.queryString()
    $("#createBtn").on("click",function () {
        $("form").ajaxSubmit({
            url:"/api/course/create",
            type:"post",
            success:function (data) {
                if(data.code==200){
                    alert("创建成功");
                    location.href ="/course/course_add_step1?cs_id"+data.result.cs_id
                }
            }
        });
        return false;
    })
})