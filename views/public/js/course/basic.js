/**
 * Created by why on 2017/6/25.
 */


define(["jquery","js/utility","template","ckeditor","form"],function ($,utility,template,CKEDITOR,form) {
               var cs_id = utility.queryString().cs_id;
               $.ajax({
                   url:"/api/course/basic",
                   type:"get",
                   data:{cs_id:cs_id},
                   success:function (data) {
                       if(data.code==200){
                           var htmlStr = template("cs_basic_tpl",data.result);
                           $(".steps").html(htmlStr);
                           //渲染富文本编辑器
                           CKEDITOR.replace("cs_brief",{
                               toolbarGroups : [
                                   { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                                   { name: 'links' },
                                   { name: 'insert' },
                                   { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
                                   { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] }
                               ]
                           });
                       }
                   }
               });
          //点击保存按钮进行提交
             $(".steps").on("click","#saveBasicBtn",function () {
                 for(var instance in CKEDITOR.instances){
                     CKEDITOR.instances[instance].updateElement(); // 更新富文本编辑器的状态
                 }
                 $("form").ajaxSubmit({
                     url:"/api/course/update/basic",
                     type:"post",
                     success:function (data) {
                         if(data.code==200){
                             alert("保存成功！");
                             // location.href="/course/pic?cs_id={{cs_id}}"
                             location.href='/course/pic?cs_id='+data.result.cs_id;
                         }
                     }
                 });
                 return false;
             })
})