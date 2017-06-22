



// if(!$.cookie("PHPSESSID") && location.pathname!="/login"){
// 	location.href = "/login";
// }
//
// if(location.pathname !="/login"&& location.pathname !="/index.php/login" && location.pathname !=
// "/index.php/dashboard/login" ){
//        var tcInfo = JSON.parse($.cookie("tcInfo"));
//        var htmlInfo = template("infoTemp",tcInfo);
//        $(".aside">".profile").html(htmlInfo);
//
// }

// define(["jquery","cookie","template"],function ($,cookie,template) {
//     if(!$.cookie("PHPSESSID") && location.pathname!="/login"){
//         location.href = "/login";
//     }
//     if(location.pathname !="/login"&& location.pathname !="/index.php/login" && location.pathname != "/index.php/dashboard/login" ){
//         var tcInfo = JSON.parse($.cookie("tcInfo"));
//         console.log(tcInfo);
//         var htmlInfo = template("infoTemp",tcInfo);
//         $(".aside>.profile").html(htmlInfo);
//     }
//     $("#logout").on("click",function () {
// 		$.ajax({
// 			url:"api/logout",
// 			type:"post",
// 			success:function (info) {
// 				if(info==200){
// 					alert("success!");
// 					window.location.href = "/login"
// 				}
//             }
// 		})
//     })
//
// })



//封装一个common模块，因为这个模块出来登录页，其他页面都需要调用


    define(['jquery','cookie','template','nprogress'],function ($, cookie, template,NProgress){

         //加载时的动画

       NProgress.start();
       NProgress.done();

           //课程管理和系统设置的下拉功能

        $('.navs ul').prev('a').on('click', function () {
            $(this).next().slideToggle();
        });

        if(!$.cookie('PHPSESSID')&& location.pathname!='/login'){

            location.href='/login';
        }

        // var result = $.cookie('tcInfo')
        //   console.log(result);;

        if(location.pathname!="/login"&& location.pathname!='/index.php/login'&& location.pathname!='/index.php/dashboard/login'){

            // 登陆页面不需要如下的代码执行，因此需要将所有的登陆页面排除掉

            var tcInfo = JSON.parse($.cookie('tcInfo'));// JSON.parse是将字符串转换为对象

            var htmlInfo = template('infoTemp',tcInfo);

            $(".aside>.profile").html(htmlInfo);
        }

        $("#logout").on("click",function (){


            $.ajax({


                url:'/api/logout',

                type:'post',

                success:function (info){

                    if(info.code == 200){

                        alert("退出成功");

                        location.href='/login';//跳转到登陆页面
                    }
                }
            })
        });
        $(document).ajaxStart(function () {
            NProgress.start();
        });
        $(document).ajaxStop(function () {
            NProgress.done();
        })


    })