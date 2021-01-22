<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "database.php";

$sentencia = $bd->query("select IdTipoCargo, IdTipoCurso, IdGenero, IdComuna, IdTurno where IdTipoCargo = IdTipoCargo and  IdTipoCurso =IdTipoCurso and  IdGenero = IdGenero and IdComuna = IdComuna and  IdTurno = IdTurno ");
$PerfilEmpleados = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($PerfilEmpleados);
