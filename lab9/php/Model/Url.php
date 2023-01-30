<?php

function check_url(){
    return isset($_GET['url']) ? explode("/", $_GET['url']) : [];
}