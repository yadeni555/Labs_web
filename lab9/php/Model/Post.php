<?php

class Post{
    static $db;
    public static function getCategorybyPost( $post_id){
        $query = static::$db->query("SELECT c.titel 
        FROM category c, post_category pc 
            Where pc.post_id = '". $post_id . "' && c.category_id=pc.category_id; 
        ");
        $result = $query->fetch_all(MYSQLI_ASSOC);
        return $result;
    }

    public static function getSortCategory($category_url, $db){
        if($category_url){
            $query = ( "SELECT * 
                 FROM category c, post_category p_c, post p 
            WHERE c.url = '" . $category_url . "' && p_c.post_id = p.post_id && p_c.category_id = c.catgory_id
            ");            
        }
        else{
            $query = ('SELECT * FROM post');
        }
        $result = $db->query($query);
        $post = $result->fetch_all(MYSQLI_ASSOC);
        return $post;
    }
}