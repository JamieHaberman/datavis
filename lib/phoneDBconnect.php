<?php

//ini_set('display_errors', 1);
//error_reporting(-1);

// $col = $_GET["color"];

$servername = "localhost";
$username = "jamieha";
$password = "1234";
$dbname = "phoneUsage";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// if(isset($col)){
//   $sql = "INSERT INTO bgColor (color) VALUES ('{$col}')";
//   $result = mysqli_query($conn, $sql);
// }

$sql = "SELECT * FROM allPhoneData";
$result = mysqli_query($conn, $sql);
// echo mysqli_num_rows($result);

// $row = mysqli_fetch_array($result);
// echo "body {";
// echo "background:" . $row[2] . ";";
// echo "}";
$data = array();

   for ($x = 0; $x < mysqli_num_rows(mysqli_query($conn,$sql)); $x++) {
       $data[] = mysqli_fetch_assoc(mysqli_query($conn,$sql));
   }

    echo json_encode($data);

    mysql_close($conn);



 ?>
