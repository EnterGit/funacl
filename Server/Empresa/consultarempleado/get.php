<?php
/*

*/ ?>
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if (empty($_GET["rut"])) {
    exit("No existen datos del empleado consultado");
}
$idMascota = $_GET["rut"];
$bd = include_once "bd.php";
//$sentencia = $bd->prepare("select rut, nombre, observacion from empleado where rut = ?");
$sentencia = $bd->prepare("select * from evaluacion where rut = ?");
//SELECT * FROM `evaluacion` WHERE `rutempleado` = "15259193-4"
//$sentencia = $bd->prepare("select * from evaluacion");
$sentencia->execute([$rut]);
//$empleos = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($empleado);





