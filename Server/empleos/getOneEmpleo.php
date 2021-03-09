<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


if (empty($_GET["idempleo"])) {
    exit("No hay id de mascota");
}
$idEmp = $_GET["idempleo"];
$bd = include_once "../bd.php";
$sentencia = $bd->prepare("SELECT idEmpleo , cargoEmpleo , profesion , vacantes , empresa , region , tregion.REGION_NOMBRE AS region_desc ,
comuna , tcomuna.COMUNA_NOMBRE as comuna_desc , direccion , 
fecPostulacion , jornada  , paramJornada.pra_des as jornada_desc , sueldo , educacion, paramEducacion.pra_des as educacion_desc , 
experiencia , tipoContrato , paramContrato.pra_des as tipoContrato_desc, descEmpleo
FROM pubempleos inner join parametros as paramJornada
ON (pubempleos.jornada = paramJornada.pra_val
AND paramJornada.pra_grp_id = 3)
inner join parametros as paramContrato
ON (pubempleos.jornada = paramContrato.pra_val
AND paramContrato.pra_grp_id = 2)
inner join parametros as paramEducacion
ON (pubempleos.educacion = paramEducacion.pra_val
AND paramEducacion.pra_grp_id = 1)
inner join tregion 
ON (pubempleos.region = tregion.REGION_ID)
inner join tcomuna 
ON (pubempleos.comuna = tcomuna.COMUNA_ID)
WHERE idEmpleo  = ?
");
$sentencia->execute([$idEmp]);
$mascota = $sentencia->fetchObject();
echo json_encode($mascota);