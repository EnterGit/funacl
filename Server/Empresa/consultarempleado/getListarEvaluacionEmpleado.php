<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if (empty($_GET["empleado"])) {
    exit("No hay id de empleado");
}
$rutempleado = $_GET["empleado"];
$bd = include_once "../../bd.php";
$sentencia = $bd->query("SELECT idEvaluacion, rutempleado, nombreempleado,rutempresa,nombreempresa,fechaingreso,fechatermino,idarticulo,nombrearticulo,idinciso,nombreinciso,Observacion,autorizacion FROM evaluacion WHERE rutempleado = $rutempleado");
$sentencia->execute();
$evaluacion = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($evaluacion);



