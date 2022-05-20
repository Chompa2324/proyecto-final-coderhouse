<?php
    //Para capturar la informacion que ingresa en los input del formulario tengo que crear variables.

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $celular = $_POST['telefono'];
    $provincia = $_POST['provincia'];
    $codigopostal = $_POST['postal'];
    $mensaje = $_POST['textarea'];

    //A quien le llega esta informacion.

    $para = 'showroomfreyja@gmail.com';
    $asunto = 'Este mail fue enviado desde la web';

    //Funcion que envia la informacion del form. 

    mail($para, $asunto, utf8_decode($nombre, $email, $mensaje));
    
    //Funcion que redirecciona al usuario una vez que completo el form.
    
    header('Location:exito.html');

?>