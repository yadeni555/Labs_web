<?php
function db_connnect ($host, $user, $pass, $name)
{
    try{
        return new mysqli($host, $user, $pass, $name);
    } catch (Exception $e){
        die("No connect MySQL");
    }
}