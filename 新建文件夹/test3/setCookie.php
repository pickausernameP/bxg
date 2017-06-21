<?php
/**
 * Created by PhpStorm.
 * User: why
 * Date: 2017/6/18
 * Time: 16:35
 */
header('Content-Type:text/html;charset=utf-8');
setcookie("name","why");
//var_dump(setcookie());
echo json_encode($_COOKIE);
?>