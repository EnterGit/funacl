<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$bd = include_once "../../bd.php";
$sentencia = $bd->query("SELECT idEvaluacion, rutempleado, nombreempleado, rutempresa, nombreempresa, fechaingreso, fechatermino, articulo.idarticulo, articulo.nombrearticulo, inciso.idinciso, inciso.nombreincisocorto, Observacion, autorizacion, recomienda,estado FROM evaluacion inner join articulo ON (evaluacion.idarticulo = articulo.idarticulo) inner join inciso ON (inciso.idarticulo = articulo.idarticulo AND evaluacion.idinciso = inciso.idinciso) order by evaluacion.idEvaluacion desc");
$sentencia->execute();
$evaluacion = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($evaluacion);



