<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if (empty($_GET["IDevaluacion"])) {
    exit("No hay id de evaluacion");
}
$id = $_GET["IDevaluacion"];


$bd = include_once "../../bd.php";
$sentencia = $bd->prepare("DELETE FROM evaluacion WHERE  idEvaluacion  = ?");
$resultado = $sentencia->execute([$id]);
echo json_encode($evaluacion);


