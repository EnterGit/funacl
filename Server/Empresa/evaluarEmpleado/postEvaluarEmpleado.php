<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonEvaluarEmpleado = json_decode(file_get_contents("php://input"));
if (!$jsonMascota) {
    exit("No hay datos");
}
$bd = include_once "database.php";
$sentencia = $bd->prepare("insert into evaluarempleado(rut, nombre) values (?,?)");
$resultado = $sentencia->execute([$jsonEvaluarEmpleado->rut, $jsonEvaluarEmpleado->nombre]);
echo json_encode([
    "resultado" => $resultado,
]);