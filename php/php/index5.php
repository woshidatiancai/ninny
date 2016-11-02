<?php
  	
$mysql=new mysqli("localhost","root","","Abest");
if ($mysql->connect_errno) {
    die($mysql->connect_errno);
};

$mysql->query("set names utf8");
$sqlstr="select * from pic";
$result=$mysql->query($sqlstr);

$myArray=array();
while ($record = $result -> fetch_assoc()) {
    array_push($myArray,$record);
};

echo json_encode($myArray);

?>