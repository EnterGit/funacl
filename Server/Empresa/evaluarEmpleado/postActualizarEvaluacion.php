<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$jsonEvaluarEmpleado = json_decode(file_get_contents("php://input"));
if (!$jsonEvaluarEmpleado) {
    exit("No hay datos");
}
$bd = include_once "../../bd.php";
$sentencia = $bd->prepare("insert into evaluacion(rutempleado, nombreempleado, rutempresa, nombreempresa, fechaingreso, fechatermino,  idarticulo, idinciso, Observacion, autorizacion, recomienda) values (?,?,?,?,?,?,?,?,?,?,?)");
// $resultado = $sentencia->execute([$jsonEvaluarEmpleado->rutempleado, $jsonEvaluarEmpleado->nombreempleado, $jsonEvaluarEmpleado->rutempresa, $jsonEvaluarEmpleado->nombreempresa, $jsonEvaluarEmpleado->fechaingreso, $jsonEvaluarEmpleado->fechatermino,  $jsonEvaluarEmpleado->idarticulo, $jsonEvaluarEmpleado->nombrearticulo, $jsonEvaluarEmpleado->idinciso, $jsonEvaluarEmpleado->nombreinciso, $jsonEvaluarEmpleado->Observacion, $jsonEvaluarEmpleado->autorizacion, $jsonEvaluarEmpleado->recomienda]);
$resultado = $sentencia->execute([$jsonEvaluarEmpleado->rutempleado, $jsonEvaluarEmpleado->nombreempleado, $jsonEvaluarEmpleado->rutempresa, $jsonEvaluarEmpleado->nombreempresa, $jsonEvaluarEmpleado->fechaingreso, $jsonEvaluarEmpleado->fechatermino,  $jsonEvaluarEmpleado->idarticulo, $jsonEvaluarEmpleado->idinciso,  $jsonEvaluarEmpleado->Observacion, $jsonEvaluarEmpleado->autorizacion, $jsonEvaluarEmpleado->recomienda]);



echo json_encode([
    "resultado" => $resultado,
]);