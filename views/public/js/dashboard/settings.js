/**
 * Created by why on 2017/6/24.
 * 配置ckeditor路径，再看是否支持模块化，define  没有的话需要shim
 * 
 */
define(["jquery","ckeditor","region","uploadify","form"],function ($,CKEDITOR) {
    CKEDITOR.replace("textarea",{
        toolbarGroups:[
            { name: 'clipboard',groups:[ 'clipboard', 'undo' ] },
            { name: 'links' },
            { name: 'insert' },
            { name: 'document',groups:[ 'mode', 'document', 'doctools' ] },
            { name: 'basicstyles',groups:[ 'basicstyles', 'cleanup' ] }
        ]
    });

    //省级联动级联动的使用
    $("#region").region({
        url:"/views/public/assets/jquery-region/region.json"
    });


    //上传头像
    $("#upfile").uploadify({
        "swf":"/views/public/assets/uploadify/uploadify.swf",
        "uploader":"/views/public/assets/uploadify/uploadify.php",
        "width":120,
        "height":120,
        "buttonText":"",
        "fileObjName":"api",
        "onUploadSuccess":function(file, data, response) {

        }

    });

});




