<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["IDevaluacion"])) {
    exit("No hay id de mascota para eliminar");
}
$idEvaluacion = $_GET["IDevaluacion"];
$bd = include_once "../../bd.php";
$sentencia = $bd->prepare("DELETE FROM evaluacion WHERE id = ?");
$resultado = $sentencia->execute([$idEvaluacion]);
echo json_encode($resultado);
