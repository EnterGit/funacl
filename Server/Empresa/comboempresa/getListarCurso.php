<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if (empty($_GET["cargo"])) {
    exit("No hay id de cargo");
}
$idcargo = $_GET["cargo"];
$bd = include_once "../../bd.php";
$sentencia = $bd->query("SELECT idcurso, nombrecurso, descripcioncurso FROM cursos WHERE idcargo = $idcargo");
$sentencia->execute();
$curso = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($curso);

