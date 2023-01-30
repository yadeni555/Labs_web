<?php
class category
{

    static function getAll($db){
        $query = $db->query('SELECT * FROM category');
        $result = $query->fetch_all(MYSQLI_ASSOC);
        return $result;
    }
}