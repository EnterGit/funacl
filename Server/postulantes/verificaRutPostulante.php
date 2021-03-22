<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


if (empty($_GET["rutPostulante"])) {
    exit("No hay id de mascota para eliminar");
}
$rut = $_GET["rutPostulante"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("SELECT count(1) as existeRut, rut as rutPostulante FROM postulantes WHERE rut = $rut");
$sentencia->execute();
$resultado = $sentencia->fetchObject();
echo json_encode($resultado);
