<?php
$contrasena = "usbw";
$usuario = "root";
$nombre_base_de_datos = "funa";
try {
    return new PDO('mysql:host=localhost;charset=UTF8;port=3307;dbname=' . $nombre_base_de_datos, $usuario, $contrasena);
} catch (Exception $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}