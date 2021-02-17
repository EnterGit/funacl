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
$sentencia = $bd->prepare("INSERT INTO loginempresa(rutEmpresa, nomEmpresa, rutRepresentante, nomRepresentante, dirEmpresa, telEmpresa, emailEmpresa, passEmpresa) VALUES (?,?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonPubli->rutEmpresa, $jsonPubli->nomEmpresa, $jsonPubli->rutRepresentante, $jsonPubli->nomRepresentante, $jsonPubli->dirEmpresa, $jsonPubli->telEmpresa, $jsonPubli->emailEmpresa, $jsonPubli->passEmpresa]);
echo json_encode([
    "resultado" => $resultado,
]);

