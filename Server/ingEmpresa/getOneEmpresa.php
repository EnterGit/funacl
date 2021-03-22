<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


if (empty($_GET["idempresa"])) {
    exit("No hay id de mascota");
}
$idEmp = $_GET["idempresa"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("SELECT idEmpresa, rutEmpresa, nomEmpresa, rutRepresentante, nomRepresentante, dirEmpresa, telEmpresa, emailEmpresa, passEmpresa, estEmpresa FROM loginempresa where estEmpresa = 1 AND idEmpresa = ?");
$sentencia->execute([$idEmp]);
$mascota = $sentencia->fetchObject();
echo json_encode($mascota);