/**
 * Created by why on 2017/6/21.
 */

define(["jquery"],function ($) {
    $(".btn-addInfo").on("click",function () {
        var data = $(".formAdd").serializeArray();

        data[3].value=="讲师"?data[3].value=0:data[3].value=1;

        data[4].value=="男"?data[4].value=0:data[4].value=1;

        $.ajax({
            url:"/api/teacher/add",
            type:"post",
            data:data,
            success:function (res) {
                if(res.code==200){
                    location.href = "/teacher/teacher_list"
                }
            }
        });
        return false;
    })
});