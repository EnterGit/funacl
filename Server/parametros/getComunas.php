<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if (empty($_GET["region"])) {
    exit("No hay id de Comuna");
}
$idregion = $_GET["region"];
$bd = include_once "../bd.php";
$sentencia = $bd->query("SELECT COMUNA_ID, COMUNA_NOMBRE FROM TCOMUNA WHERE REGION_ID = $idregion");
$sentencia->execute();
$comunas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($comunas);
