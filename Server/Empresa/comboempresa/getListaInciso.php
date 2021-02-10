<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if (empty($_GET["articulo"])) {
    exit("No hay id de articulo");
}
$idarticulo = $_GET["articulo"];
$bd = include_once "../../bd.php";
$sentencia = $bd->query("SELECT idinciso, nombreincisocorto FROM inciso WHERE idarticulo = $idarticulo");
$sentencia->execute();
$inciso = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($inciso);

