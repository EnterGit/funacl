<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonPubli = json_decode(file_get_contents("php://input"));
if (!$jsonPubli) {
    exit("No hay datos");
}
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("UPDATE pubempleos SET cargoEmpleo = ?, profesion = ?, vacantes = ?, empresa = ?, region = ?, comuna = ?, direccion = ?, fecPostulacion = ?, jornada = ?, sueldo = ?, educacion = ?, experiencia = ?, tipoContrato = ?, descEmpleo = ? WHERE idEmpleo = ?");
$resultado = $sentencia->execute([$jsonPubli->cargoEmpleo, $jsonPubli->profesion, $jsonPubli->vacantes, $jsonPubli->empresa, $jsonPubli->region, $jsonPubli->comuna, $jsonPubli->direccion, $jsonPubli->fecPostulacion, $jsonPubli->jornada,  $jsonPubli->sueldo,  $jsonPubli->educacion, $jsonPubli->experiencia, $jsonPubli->tipoContrato, $jsonPubli->descEmpleo, $jsonPubli->idEmpleo]);
echo json_encode($resultado);
