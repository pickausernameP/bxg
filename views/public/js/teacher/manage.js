/**
 * Created by why on 2017/6/22.
 */
define(["jquery","template","jqueryForm"],function ($,template) {
    var search = location.search;
    console.log(search);
    search = search.slice(1);
     var searchArr = search.split("&");
     var searchObj = {};
    for(var i=0;i<searchArr.length;i++){
       var temp = searchArr[i].split("=");
       searchObj[temp[0]]=temp[1];
    }
    console.log(searchObj);
    // var searchObj = utility;


    $.ajax({
        url:'/api/teacher/edit',
        type:'get',
        data:{tc_id:searchObj.tc_id},
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
  $(".btn-success").on("click",function () {
      $.ajax({
          url:"/api/teacher/update",
          type:"post",
          // data:searchObj,
          success:function () {
              return false;
          }

      })
  })

});
