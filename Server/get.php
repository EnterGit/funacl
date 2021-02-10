<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


if (empty($_GET["idpublicidad"])) {
    exit("No hay id de mascota");
}
$idpubli = $_GET["idpublicidad"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select idpublicidad, rutEmpresa, nomEmpresa, nomContacto, telefonoContacto, fecIniPub, fecTerPub, email, imagenUrl, descPublicidad from publicidad where idpublicidad = ?");
$sentencia->execute([$idpubli]);
$mascota = $sentencia->fetchObject();
echo json_encode($mascota);