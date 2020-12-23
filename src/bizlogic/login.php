<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    print_r($request);

    $user_name = $request->user_name;
    $password = $request->password;

    $sql = " INSERT INTO `User`(
        `username`,
        `password`,
    )VALUES
     ('{$user_name}',
      '{$password}'
      )";
}