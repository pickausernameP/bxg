/**
 * Created by why on 2017/6/22.
 */
define(["jquery","template","jqueryForm","utility"],function ($,template,form,utility) {
    // var search = location.search;
    // console.log(search);
    // search = search.slice(1);
    //  var searchArr = search.split("&");
    //  var searchObj = {};
    // for(var i=0;i<searchArr.length;i++){
    //    var temp = searchArr[i].split("=");
    //    searchObj[temp[0]]=temp[1];
    // }
    // console.log(searchObj);
    


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
            }
        }
    });
    // $("form").ajaxForm({
    //     url:"/api/teacher/update",
    //     type:"post",
    //     success:function (res1) {
    //         alert(res1.msg)
    //     }
    // })
  $(".teacher").on("click","btn-success",function () {
      $("form").ajaxSubmit({
          url:"/api/teacher/update",
          type:"post",

          success:function () {
              alert(123)

          }

      })
  })



    // $(".btn-addInfo").on("click",function () {
    //     var data = $(".formAdd").serializeArray();
    //
    //     data[3].value=="讲师"?data[3].value=0:data[3].value=1;
    //
    //     data[4].value=="男"?data[4].value=0:data[4].value=1;
    //
    //     $.ajax({
    //         url:"/api/teacher/add",
    //         type:"post",
    //         data:data,
    //         success:function (res) {
    //             if(res.code==200){
    //                 location.href = "/teacher/teacher_list"
    //             }
    //         }
    //     });
    //     return false;
    // })
});

