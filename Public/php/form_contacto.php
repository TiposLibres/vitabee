<?php 

    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["comentarios"];
    $asunto = 'Nuevo mensaje - Formulario de contacto';

    $respuesta = [];
    echo json_encode($respuesta);

    // // GOOGLE reCAPTCHA
    // $recaptcha = $_POST['g-recaptcha-response'];
    // $secret = "6LfuuZomAAAAAA4WGUMj1CLayfc5wNfAwoRnwd-g";

    // // VALIDAMOS LA VERIFICACIÓN DEL reCAPTCHA
    // if(!$recaptcha){
    //     echo "Por favor verifica el captcha";
    // } else{
    //     $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha");
    //     var_dump($response);
    //     $array = json_decode($response, true);
    //     if($array["success"]){
                
            // echo "<h2>Gracias</h2>";

            //ENVIAMOS EL FORMULARIO
            echo('DATOS ENVIADOS CON EXITO: ' . $nombre . $correo . $telefono . $mensaje);


            $cabecera = '
            <html>
            <head>
                <title>VitaBee | Sitio oficial</title>
            </head>
            <body>
                <img src="https://tiposlibres.com/test/vitabee/Public/images/Imagen-mensaje-contacto.jpg" width="100%" height="auto">
            </body>
            </html>
            ';
            // Para enviar un correo HTML, debe establecerse la cabecera Content-type
            ini_set('display_errors', 1);
            error_reporting(E_ALL);
            $headers = "From: $correo";
            $headers = "From: " . $correo . "\r\n";
            $headers .= "Reply-To: ". $correo . "\r\n";
            $headers .= "Bcc: ricardo@tiposlibres.com, richtipolibre@gmail.com \r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=utf-8\r\n";
            //$cabeceras .= 'From: <'.$email_from.'>' . "\r\n";

            $email_from = $correo;

            // Varios destinatarios
            $email_to = 'hola@vitabee.mx';
            // $email_to = 'contacto@sophie.travel, alan@tiposlibres.com';
            /*$para  = 'graphicrichart@gmail.com' . ', '; // atención a la coma
            $para .= 'garcia_richgraphic@hotmail.com';*/
            
            $body = $cabecera . "\n\n" . '<br><h3>Asunto: ' . $asunto . '</h3>' . "\n\n" . '<br>Nombre: ' . $nombre . "\n\n" . '<br>Email: ' . $correo . "\n\n" . '<br>Teléfono: ' . $telefono . "\n\n" . '<br>Mensaje: ' . $mensaje . "\n\n";

            $success = @mail($email_to, $asunto, $body, $headers);
            echo "Msn enviado";
            

    //     } else {
    //         echo "Error al comprobar el reCaptcha";
    //     }
    // }



        // GOOGLE reCAPTCHA
        // $recaptcha = $_POST['g-recaptcha-response'];
        // $secret = "6LdFFaskAAAAAJC-d815bNDwJeRVz_WHKQygZS4v";

        // VALIDAMOS LA VERIFICACIÓN DEL reCAPTCHA
        // if(!$recaptcha){
        //     echo "Por favor verifica el captcha";
        // } else{
            // $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha");
            // var_dump($response);
            // $array = json_decode($response, true);
            // if($array["success"]){
            //     echo "<h2>Gracias</h2>";

                // Para enviar un correo HTML, debe establecerse la cabecera Content-type

                //FIN DEL FORMULARIO
            // } else {
            //     echo "Error al comprobar el reCaptcha";
            // }
        // }

?>