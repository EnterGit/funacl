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
$sentencia = $bd->prepare("INSERT INTO postulantes(rut, nombreCompleto, fechaNacimiento, sexo, nacionalidad, estadoCivil, celular,
telefono, email, region, comuna, calle, numero, depto, password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonPubli->rut, $jsonPubli->nombreCompleto, $jsonPubli->fechaNacimiento, 
$jsonPubli->sexo, $jsonPubli->nacionalidad, $jsonPubli->estadoCivil, $jsonPubli->celular, $jsonPubli->telefono, 
$jsonPubli->email,  $jsonPubli->region,  $jsonPubli->comuna, $jsonPubli->calle, $jsonPubli->numero, 
$jsonPubli->depto, $jsonPubli->passEmpresa]);
echo json_encode([
    "resultado" => $resultado,
]);
