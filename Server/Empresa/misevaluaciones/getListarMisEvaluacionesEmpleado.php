<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if (empty($_GET["empleado"])) {
    exit("No hay id de empleado");
}

 if (empty($_GET["empresa"])) {
        exit("No hay rut Empresa");
}

$rutempleado = $_GET["empleado"];
$rutEmpresa = $_GET["empresa"];



$bd = include_once "../../bd.php";
$sentencia = $bd->query("SELECT idEvaluacion, rutempleado, nombreempleado,rutempresa,nombreempresa,fechaingreso,fechatermino,nombreinciso,Observacion,autorizacion, inciso.idarticulo, nombrearticulo, inciso.nombreincisocorto FROM evaluacion, inciso WHERE rutempleado = $rutempleado and rutempresa= $rutEmpresa");
//$sentencia = $bd->query("SELECT idEvaluacion, rutempleado, nombreempleado, rutempresa, nombreempresa, fechaingreso, fechatermino, idarticulo, nombrearticulo,   Observacion, autorizacion, recomienda from evaluacion  where  rutempleado = $rutempleado and rutempresa= $rutEmpresa");
$sentencia->execute();
$evaluacion = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($evaluacion);


//SELECT idEvaluacion, rutempleado, nombreempleado,rutempresa,nombreempresa,fechaingreso,fechatermino,nombreinciso,Observacion,autorizacion, inciso.idarticulo, articulo.nombrearticulo, inciso.nombreincisocorto FROM evaluacion, inciso, articulo WHERE evaluacion.idarticulo = articulo.idarticulo and evaluacion.idinciso = inciso.idinciso AND rutempleado = '12345' and rutempresa= '678910'


