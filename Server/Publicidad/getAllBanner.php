<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$bd = include_once "bd.php";

$sentencia = $bd->query("select idpublicidad, imagenUrl, empresa, estado from publicidad where estado = 1");
$empleos = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($empleos);