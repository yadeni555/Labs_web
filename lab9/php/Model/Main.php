<?php


require "./PHP/Model/Connect.php";
require "./PHP/Model/Category.php";
require "./PHP/Model/Post.php";
require "./PHP/Model/Url.php";


$db = db_connnect('localhost', 'root', '', 'Lab9');
$url = check_url();
$category_url = $url[0] ?? false;

Post::$db = $db;

$categories = category::getAll($db);
$posts = Post::getSortCategory($category_url, $db);

?>