
    require.config({
        baseUrl:"/views/public/",
        paths:{
            "jquery":"assets/jquery/jquery.min",
            "bootstrap":"assets/bootstrap/js/bootstrap.min",
            "cookie":"assets/jquery-cookie/jquery.cookie",
            // "template":"assets/artTemplate/template-native",
            "template":"assets/artTemplate/template",
            "nprogress":"assets/nprogress/nprogress",
            "region":"assets/jquery-region/jquery.region",
            "common":"js/dashboard/common",
            "login":"js/dashboard/login",
            "form":"assets/jquery-form/jquery.form",
            'datepicker':'assets/bootstrap-datepicker/js/bootstrap-datepicker',
            'datepickerzh':'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
            "ckeditor":"assets/ckeditor/ckeditor",
            "region":"assets/jquery-region/jquery.region",
            "uploadify":"assets/uploadify/jquery.uploadify"


        },
        shim:{
            "bootstrap":{deps:["jquery"]},
            "cookie":{deps:["jquery"]},
            'datepickerzh':{
                deps:['jquery']
            },
            "ckeditor":{
               exports:"CKEDITOR"
            },
            "uploadify":{
                deps:['jquery']
            }

        },

    })


require(["common"])


