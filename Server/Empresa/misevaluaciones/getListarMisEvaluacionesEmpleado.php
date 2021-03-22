<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$rutempleado = $_GET["rutEmpleado"];
$rutEmpresa = $_GET["rutEmpresa"];

$bd = include_once "../../bd.php";
$sentencia = $bd->query("SELECT idEvaluacion, rutempleado, nombreempleado, rutempresa, nombreempresa, fechaingreso, fechatermino, art.idarticulo, art.nombrearticulo, inc.idinciso, inc.nombreincisocorto, Observacion, autorizacion, recomienda, estado
FROM evaluacion as eval
INNER JOIN articulo as art ON(eval.idarticulo = art.idarticulo)
INNER JOIN inciso as inc ON(eval.idinciso = inc.idinciso) 
WHERE eval.rutempleado = '$rutempleado' AND eval.rutempresa = '$rutEmpresa'");
$sentencia->execute();
$evaluacion = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($evaluacion);



//SELECT idEvaluacion, rutempleado, nombreempleado,rutempresa,nombreempresa,fechaingreso,fechatermino,nombreinciso,Observacion,autorizacion, inciso.idarticulo, articulo.nombrearticulo, inciso.nombreincisocorto FROM evaluacion, inciso, articulo WHERE evaluacion.idarticulo = articulo.idarticulo and evaluacion.idinciso = inciso.idinciso AND rutempleado = '12345' and rutempresa= '678910'


