<?php
header("Content-type:text/html;charset=utf-8");
//echo "这是php返回的数据";
//include "views/dashboard/index.html";
//
//var_dump ($_SERVER);
//echo($_SERVER["PATH_INFO"]);
$path = '';
if(array_key_exists("PATH_INFO",$_SERVER)){
$path = $_SERVER["PATH_INFO"];
//截取字符串
$path = substr($path,1);
//以某个分隔符来切割字符串
$arr = explode("/",$path);
//count(数组)用户获取数组中元素的个数或是长度
if(count($arr)==2){
    //以这种域名访问的时候，study/index.php/dashboard/index
    $path = "/views/".$arr[0]."/".$arr[1];
}else if(count($arr)==1){
    //以这种域名访问的时候 study.com/index.php/index
    //即$path = /view/dashboard/index
    $path = "/views/dashboard/".$arr[0];
}
}
else{
$path = "/views/dashboard/index";
}
$path = $path.'.html';
//echo $path;
 include $path;

 ?>