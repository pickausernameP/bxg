
    require.config({
        baseUrl:"/views/public",
        paths:{
            "jquery":"assets/jquery/jquery.min",
            "bootstrap":"assets/bootstrap/js/bootstrap.min",
            "cookie":"assets/jquery-cookie/jquery.cookie",
            "template":"assets/artTemplate/template-native",
            "nprogress":"assets/nprogress/nprogress",
            "common":"js/dashboard/common",
            "login":"js/dashboard/login",

        },
        shim:{
            "bootstrap":{deps:["jquery"]},
            "cookie":{deps:["jquery"]},
            "template":{deps:["jquery"]}
        }
    })


require(["common"])


