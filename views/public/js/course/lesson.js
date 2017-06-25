/**
 * Created by why on 2017/6/25.
 */

define(["jquery","js/utility","template","bootstrap"],function ($,utility,template,bootstrap) {
    var cs_id = utility.queryString().cs_id;
    $.ajax({
        url:"/api/course/lesson",
        type:"get",
        data:{cs_id:cs_id},
        success:function (data) {
            if(data.code==200){
                var htmlstr = template("ct_lesson_tpl",data.result);
                $(".steps").html(htmlstr);
            }
        }
    });
        // $(".steps").on("click","#lesson",function () {
        //     var htmlStr1 = template("ct_lesson_tpl",data.result);
        //     $(".modal-content").html(htmlStr1);
        //     $("#lesson").modal();
        // });
    $(".steps").on("click",'#addLesson',function (){
        var htmlStr = template('',{

        })
        //chepter  章节
        $("#lesson").modal();  //显示模态框
    });
})
