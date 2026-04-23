<?php
$host = 'localhost';
$db   = 'oceansim';
$user = 'root';
$pass = ''; // default XAMPP password is empty

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}
?>