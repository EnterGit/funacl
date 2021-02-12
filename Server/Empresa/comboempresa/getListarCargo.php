<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$bd = include_once "../../bd.php";

$sentencia = $bd->query("SELECT idcargo, nombrecargo, descripcioncargo FROM cargo");
$cargo = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($cargo);