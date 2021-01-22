<?php
/*

*/ ?>
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["rut"])) {
    exit("No existen datos del empleado consultado");
}
$idMascota = $_GET["rut"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select rut, nombre, observacion from empleado where rut = ?");
$sentencia->execute([$rut]);
$empleado = $sentencia->fetchObject();
echo json_encode($empleado);


