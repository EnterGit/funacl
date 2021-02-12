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
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into publicidad(rutEmpresa, nomEmpresa, nomContacto, telefonoContacto,fecIniPub, fecTerPub, email, imagenUrl, descPublicidad) values (?,?,?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonPubli->rutEmpresa, $jsonPubli->nomEmpresa, $jsonPubli->nomContacto, $jsonPubli->telefonoContacto, $jsonPubli->fecIniPub, $jsonPubli->fecTerPub, $jsonPubli->email, $jsonPubli->imagenUrl, $jsonPubli->descPublicidad]);
echo json_encode([
    "resultado" => $resultado,
]);