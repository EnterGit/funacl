<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-type: text/html; charset=UTF-8');

$bd = include_once "../bd.php";

$sentencia = $bd->query("SELECT REGION_ID, REGION_NOMBRE FROM TREGION");
$regiones = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo utf8_decode(json_encode($regiones));