"use stric";

// espacio para el metodo principal

document.addEventListener("DOMContentLoaded", function() { // funcion que escucha cuando se carga la pagina
    document.getElementById("form-registro").addEventListener("submit", validateForm); //funcion que escucha cuando se activa el evento submit en el form
});

function validateForm(event) { //funcion que llama a las funciones que van a validar los campos
    event.preventDefault(); // funcion que suspende el evento submit para que no se ejecute y asi validar los campos

    var contrasena = checkContrasena(document.getElementById("contrasena").value); // variable que guarda el valor true o false de la validacion de los campos

    // en este espacio se pondran las variables que van a recibir el true o false de las funciones que evaluan los campos del formulario


    if (contrasena) { // condicional que evalua si las variables son true y asi activar el evento submit del form
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
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

// fin espacio para validacion de campo Correo

// espacio para validacion de campo Contraseña

function checkContrasena(pass) {
    //funcion de validacion de contrasena

    const reg = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/; // expresion regular con el patron valido de contrasena
    console.log("test " + reg.test(pass)); //Imprime en consolo si el test es true o false

    if (!reg.test(pass)) {
        //valida si el teste es true o false,

        //Imprime en el html en la etiqueta span con id passSpan el texto
        document.getElementById("passSpan").innerHTML =
            "La contraseña debe tener minimo 8 digitos, una mayúscula, una minúscula y un número.";

        // Hace el focus en el campo contrasena
        document.getElementById("contrasena").focus();

        //Imprime el error en consola
        console.log(
            "[ERR]",
            "La contraseña debe tener minimo 8 digitos, una mayuscula, una minuscula y un numero"
        );

        //retorna false cuando no pasa el test de la expresion regular
        return false;
    } else {
        //retorna true si pasa el test de la expresion regular
        return true;
    }
}

// fin espacio para validacion de campo Contraseña

// module.exports = {
//     checkContrasena,
//