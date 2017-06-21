

require.config({
    baseUrl:"/",
    paths:{
       "jquery":"views/public/assets/jquery/jquery",
        "cookie":"views/public/assets/jquery-cookie/jquery.cookie",
        "bootstrap":"views/public/assets/bootstrap/js/bootstrap",
    },
    shim:{
        "bootstrap":{
            deps:["jquery"]
        }
    }
});
require(["jquery","cookie","bootstrap"],function ($) {
    // console.log($('body'))
    $('p').css({
        width:200,
        height:200,
        background:"red"
    })


})