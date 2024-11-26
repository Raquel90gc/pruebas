<?php
require_once 'pdoconfig.php';
$servername = "db1";
$database = "databasename";
$username = "username";
$password = "password";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname",$username,$password);
    echo "Conectado a $dbname de $host con exito.";
} catch (PDOException $pe) {
    die("No es posible la conexión a $dbname :" .$pe->getMessage());
}
?>