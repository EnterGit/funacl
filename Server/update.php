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
$bd = include_once "bd.php";
$sentencia = $bd->prepare("UPDATE publicidad SET rutEmpresa = ?, nomEmpresa = ?, nomContacto = ?, telefonoContacto = ?, fecIniPub = ?, fecTerPub = ?, email = ?, imagenUrl = ?, descPublicidad = ? WHERE idpublicidad = ?");
$resultado = $sentencia->execute([$jsonPubli->rutEmpresa, $jsonPubli->nomEmpresa, $jsonPubli->nomContacto, $jsonPubli->telefonoContacto, $jsonPubli->fecIniPub, $jsonPubli->fecTerPub, $jsonPubli->email, $jsonPubli->imagenUrl, $jsonPubli->descPublicidad, $jsonPubli->idpublicidad]);
echo json_encode($resultado);