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
$sentencia = $bd->prepare("UPDATE loginempresa SET rutEmpresa = ?, nomEmpresa = ?, rutRepresentante = ?, nomRepresentante = ?, dirEmpresa = ?, telEmpresa = ?, emailEmpresa = ?, passEmpresa = ? WHERE idEmpresa = ?");
$resultado = $sentencia->execute([$jsonPubli->rutEmpresa, $jsonPubli->nomEmpresa, $jsonPubli->rutRepresentante, $jsonPubli->nomRepresentante, $jsonPubli->dirEmpresa, $jsonPubli->telEmpresa, $jsonPubli->emailEmpresa, $jsonPubli->passEmpresa, $jsonPubli->idEmpresa]);
echo json_encode($resultado);