<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "../bd.php";

$sentencia = $bd->query("SELECT idEmpleo , cargoEmpleo , profesion , vacantes , empresa , tregion.REGION_NOMBRE AS region , tcomuna.COMUNA_NOMBRE as comuna , direccion , 
fecPostulacion , jornada as jornada_id , paramJornada.pra_des as jornada , sueldo , educacion as eduacion_id, paramEducacion.pra_des , 
experiencia , tipoContrato as tipoContrato_id , paramContrato.pra_des as tipoContrato, descEmpleo
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
");
$empleos = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($empleos);
