<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idEmpresa"])) {
    exit("No hay id de mascota para eliminar");
}
$idPubli = $_GET["idEmpresa"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("DELETE FROM loginempresa WHERE idEmpresa = ?");
$resultado = $sentencia->execute([$idPubli]);
echo json_encode($resultado);
