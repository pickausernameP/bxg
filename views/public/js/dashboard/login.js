require(["jquery","cookie"],function ($) {
    $("#formLogin").submit(function (e) {   //submit事件相当于是多了一个回车的功能
        var data = $("#formLogin").serializeArray();
        console.log(data);
        //preventDefault()//   阻止默认行为
        //stopPropagation()//    阻止 冒泡


       var userName =$("#userName");
       var pwd = $("#pwd");
        if(userName.val()==""|| pwd.val()==""){
            alert("请输入用户名和密码");
            e.preventDefault();
        }

      else{
            $.ajax({
                url: '/api/login', // 简写的形式
                type: 'post',
                data: data,
                success: function (info) {
                    console.log(info);


                    if (info.code == 200) {
                        $.cookie('tcInfo',JSON.stringify(info.result))
                        window.location.href='index';
                    }

                },
                error: function (errInfo) {
                    console.log(errInfo);
                    alert("用户名或是密码输入错误，请重新输入。。。");
                }
            })
        }

        return false;
    })
})