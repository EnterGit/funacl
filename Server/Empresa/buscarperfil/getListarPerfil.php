<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$idcargo    = $_GET["idcargo"];
$idcurso    = $_GET["idcurso"];
$idsexo     = $_GET["idsexo"];
$idregion   = $_GET["idregion"];
$idcomuna   = $_GET["idcomuna"];
$idturno    = $_GET["idturno"];


$bd = include_once "../../bd.php";
$sentencia = $bd->query("SELECT p1.rut, nombreCompleto, fechaNacimiento, sexo,paramsexo.pra_des, nacionalidad, estadoCivil, 
celular, telefono, email, region,re.REGION_NOMBRE, comuna,co.COMUNA_NOMBRE, calle, numero, depto, puestoTrabajo,paramcargo.pra_des,
 cursoAcreditacion,paramcurso.pra_des, fechaAcreditacion, especialidad, nivelComputacion, turnos, paramturno.pra_des
 FROM postulantes as p1 INNER JOIN postulanteslaboral as p2 ON(p1.rut = p2.rut) 
 INNER JOIN parametros as paramsexo ON(p1.sexo = paramsexo.pra_val AND paramsexo.pra_grp_id = 6 ) 
 INNER JOIN tregion as re ON(re.REGION_ID = p1.region) INNER JOIN tcomuna as co ON(co.COMUNA_ID = p1.comuna)
INNER JOIN parametros as paramcargo  ON( paramcargo.pra_val = p2.puestoTrabajo AND  paramcargo.pra_grp_id = '4')
INNER JOIN parametros as paramcurso  ON( paramcurso.pra_val = p2.cursoAcreditacion AND  paramcurso.pra_grp_id = '5')
INNER JOIN parametros as paramturno  ON( paramturno.pra_val = p2.turnos AND  paramturno.pra_grp_id = '7')
where (($idsexo = 0) or ($idsexo = p1.sexo)) AND
(($idregion = 0) or ($idregion =p1.region)) AND
(($idcomuna = 0) or ($idcomuna =p1.comuna))AND
(($idcargo = 0) or ($idcargo =p2.puestoTrabajo)) AND
(($idcurso = 0) or ($idcurso =p2.cursoAcreditacion)) AND
(($idturno = 0) or ($idturno =p2.turnos))");
$sentencia->execute();
$evaluacion = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($evaluacion);
