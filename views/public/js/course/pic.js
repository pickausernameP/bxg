/**
 * Created by why on 2017/6/25.
 */



define(["jquery","js/utility","uploadify","Jcrop"],function ($,utility,uploadify,jcrop) {
    var cs_id = utility.queryString().cs_id;
    console.log(cs_id)
    $.ajax({
        url:"/api/course/picture",
        type:"get",
        data:{cs_id:cs_id},
        success:function (data) {
            if(data.code==200){
                // alert("成功。。。")
                //渲染图片
            }
        }
    });


    // $("#selectBtn").uploadify({
    //     swf:'/views/public/assets/uploadify/uploadify.swf',
    //     uploader:'/api/uploader/cover',
    //     width:90,
    //     height:"auto",
    //     buttonText:'请选择图片',
    //     formData:{cs_id:cs_id},
    //     fileObjName:'cs_cover_original',
    //     buttonClass:"btn btn-success btn-sm",
    //     onUploadSuccess:function(file, data, response){
    //           $(".preview img").attr("src",JSON.parse(data).result.path);
    //           $("#cropBtn").prop("disable",false)
    //     }
    // });




    $("#selectBtn").uploadify({
        swf:'/views/public/assets/uploadify/uploadify.swf',
        uploader:'/api/uploader/cover',
        width:85,
        height:'auto',
        buttonText:'请选择图片',
        formData:{cs_id:cs_id},
        fileObjName:'cs_cover_original',
        buttonClass:'btn btn-success btn-sm',
        onUploadSuccess:function(file, data, response){
            // console.log(data); 如果图片上传成功的话，要将图片显示出来
            $(".preview img").attr('src',JSON.parse(data).result.path);
            $('#cropBtn').prop('disabled',false);// selected  checked  disabled 这三个比较特殊，不能用attr，只能用prop
        }
    });
    $("#cropBtn").on("click",function (){
        $.ajax({
            url:'/api/course/update/picture',
            type:'post',
            data:{
                cs_id:cs_id,
                x:10,
                y:10,
                w:200,
                h:100
            },
            success:function (data){
                if(data.code==200){
                    alert(123);
                    location.href='/course/lesson?cs_id='+data.result.cs_id;
                }
            }
        })
    })

})