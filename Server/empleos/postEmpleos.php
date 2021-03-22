<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$jsonPubli = json_decode(file_get_contents("php://input"));
if (!$jsonPubli) {
    exit("No hay datos");
}
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("INSERT INTO pubempleos(cargoEmpleo, profesion, vacantes, empresa, region, comuna, direccion, fecPostulacion, jornada, sueldo, educacion, experiencia, tipoContrato, descEmpleo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonPubli->cargoEmpleo, $jsonPubli->profesion, $jsonPubli->vacantes, $jsonPubli->empresa, $jsonPubli->region, $jsonPubli->comuna, $jsonPubli->direccion, $jsonPubli->fecPostulacion, $jsonPubli->jornada,  $jsonPubli->sueldo,  $jsonPubli->educacion, $jsonPubli->experiencia, $jsonPubli->tipoContrato, $jsonPubli->descEmpleo]);
echo json_encode([
    "resultado" => $resultado,
]);
