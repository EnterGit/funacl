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
$sentencia = $bd->prepare("SELECT idEvaluacion, rutempleado, nombreempleado, rutempresa, nombreempresa, fechaingreso, fechatermino, idarticulo, idinciso, Observacion, autorizacion, recomienda FROM evaluacion WHERE  idEvaluacion  = ?");
$sentencia->execute([$id]);
$evaluacion = $sentencia->fetchObject();
echo json_encode($evaluacion);



