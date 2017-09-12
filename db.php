<?php

try {
$conn = new PDO("mysql:host=127.0.0.1;dbname=Sastojci", 'root');
// set the PDO error mode to exception
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
echo "Connected successfully"; 
}
catch(PDOException $e)
{
echo "Connection failed: " . $e->getMessage();
}

?>