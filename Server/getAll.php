<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";

$sentencia = $bd->query("select idEmpleo, empresa, detalle, fecInicio, fecTermino, cargo from empleos where estado = 1");
$empleos = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($empleos);
