"use stric";

// espacio para el metodo principal

document.addEventListener("DOMContentLoaded", function() { // funcion que escucha cuando se carga la pagina
    document.getElementById("form-registro").addEventListener("submit", validateForm); //funcion que escucha cuando se activa el evento submit en el form
});

function validateForm(event) { //funcion que llama a las funciones que van a validar los campos

    event.preventDefault(); // funcion que suspende el evento submit para que no se ejecute y asi validar los campos

    document.getElementById('mailSpan').innerHTML = ""; // limpia el span de la alerta
    document.getElementById('passSpan').innerHTML = ""; // limpia el span de la alerta

    // en este espacio se pondran las variables que van a recibir el true o false de las funciones que evaluan los campos del formulario

    var mail = checkCorreo(document.getElementById("correo").value); // variable que guarda el valor de true o false de validacion de correo
    var contrasena = checkContrasena(document.getElementById("contrasena").value); // variable que guarda el valor true o false de la validacion de los campos

    if (mail && contrasena) { // condicional que evalua si las variables son true y asi activar el evento submit del form
        this.submit();
    }
}

// fin de espacio para medoto principal

// espacio para validacion de campo Nombre

// fin espacio para validacion de campo Nombre

// espacio para validacion de campo Telefono

// fin espacio para validacion de campo Telefono

// espacio para validacion de campo Direccion

// fin espacio para validacion de campo Direccion

// espacio para validacion de campo Correo
function checkCorreo(mail) {

    const regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    console.log("Test Mail: " + regMail.test(mail));

    if (!regMail.test(mail)) {
        document.getElementById('mailSpan').innerHTML = "Por favor verifique el correo; Debe tener @ y el dominio despues del @.";
        document.getElementById('correo').focus();
        console.log("[ERR Registro - Mail]", "Por favor verifique el correo, debe tener @ y el dominio despues del @.");
        return false;
    } else {
        return true;
    }

}

// fin espacio para validacion de campo Correo

// espacio para validacion de campo Contraseña

function checkContrasena(pass) { //funcion de validacion de contrasena

    const regPass = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/; // expresion regular con el patron valido de contrasena
    console.log("Test Pass: " + regPass.test(pass)); //Imprime en consolo si el test es true o false

    if (!regPass.test(pass)) { //valida si el teste es true o false,
        document.getElementById("passSpan").innerHTML = "La contraseña debe tener minimo 8 digitos, una mayúscula, una minúscula y un número."; //Imprime en el html en la etiqueta span con id passSpan el texto
        document.getElementById("contrasena").focus(); // Hace el focus en el campo contrasena
        console.log("[ERR Registro - Password]", "La contraseña debe tener minimo 8 digitos, una mayuscula, una minuscula y un numero"); //Imprime el error en consola
        return false; //retorna false cuando no pasa el test de la expresion regular

    } else {
        return true; //retorna true si pasa el test de la expresion regular
    }
}

// fin espacio para validacion de campo Contraseña

// module.exports = {
//     checkContrasena,
//}