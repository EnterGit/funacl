<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-type: text/html; charset=UTF-8');

if (empty($_GET["codgrupo"])) {
    exit("No hay id de Grupo");
}
$codgrupo = $_GET["codgrupo"];
$bd = include_once "../bd.php";
$sentencia = $bd->query("SELECT pra_val, pra_des FROM parametros WHERE pra_grp_id = $codgrupo and pra_idr_vca = 1");
$sentencia->execute();
$parametros = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($parametros);