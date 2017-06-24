/**
 * Created by why on 2017/6/21.
 */


define(["jquery","template","bootstrap"],function ($,template,bootstrap) {
    $.ajax({
        url:"/api/teacher",
        type:"get",
        success:function (data) {
            if(data.code==200){
              //用模板来渲染数据
                var html = template("tc_list_tpl",data);
                $("#tc_list_tBody").html(html);
            }
        }
    });
    $("#tc_list_tBody").on("click","a.check-info",function () {
        //获取此讲师的id
        // var id = $(this).parent().dataset["id"];
        var id = $(this).parent().attr("data-id")
        $.ajax({
            url:"/api/teacher/view",
            type:"get",
            data:{tc_id:id},
            success:function (res) {
                if(res.code==200){
                    //渲染模板
                    var htmlStr = template("tc_info_tpl",res.result);
                    $("#teacherModal tbody").html(htmlStr);
                    $("#teacherModal tbody").modal();
                }
            }
        })
    });

    //用委托的方法给动态添加的元素注册事件
     $("#tc_list_tBody").on("click","a.btnDel",function () {
         var _this = $(this);
        $.ajax({
            url:"/api/teacher/handle",
             type:"post",
           data:{tc_id:$(this).parent().attr("data-id"),tc_status:$(this).attr("data-status")},
            success:function (res1) {
                _this.attr("data-status",res1.result.tc_status);
                  if(res1.code==200) {
                                  if(res1.result.tc_status==1){
                                      _this.text( "启 用");

                                  }
                                  else{
                                      _this.text("注 销");

                                  }
                  }
             }
        })
     })
});