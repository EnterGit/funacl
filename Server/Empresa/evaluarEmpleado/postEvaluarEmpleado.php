<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonEvaluarEmpleado = json_decode(file_get_contents("php://input"));
if (!$jsonEvaluarEmpleado) {
    exit("No hay datos");
}
$bd = include_once "../../bd.php";
$sentencia = $bd->prepare("insert into evaluacion(rutempleado, nombreempleado, rutempresa, nombreempresa, fechaingreso, fechatermino,  idarticulo, nombrearticulo, idinciso, nombreinciso, Observacion, autorizacion, recomienda) values (?,?,?,?,?,?,?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonEvaluarEmpleado->rutempleado, $jsonEvaluarEmpleado->nombreempleado, $jsonEvaluarEmpleado->rutempresa, $jsonEvaluarEmpleado->nombreempresa, $jsonEvaluarEmpleado->fechaingreso, $jsonEvaluarEmpleado->fechatermino,  $jsonEvaluarEmpleado->idarticulo, $jsonEvaluarEmpleado->nombrearticulo, $jsonEvaluarEmpleado->idinciso, $jsonEvaluarEmpleado->nombreinciso, $jsonEvaluarEmpleado->Observacion, $jsonEvaluarEmpleado->autorizacion, $jsonEvaluarEmpleado->recomienda]);




echo json_encode([
    "resultado" => $resultado,
]);