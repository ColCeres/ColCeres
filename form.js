'use stric';

// espacio para el metodo principal

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit', validateForm);
});

function validateForm(event) {
    event.preventDefault();

    var contrasena = checkContrasena(document.getElementById('contrasena').value)

    if (contrasena) {
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
    const reg = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/;
    console.log("test " + reg.test(pass));

    if (!reg.test(pass)) {
        document.getElementById('passSpan').innerHTML = "La contraseña debe tener minimo 8 digitos, una mayúscula, una minúscula y un número."
        document.getElementById('contrasena').focus();
        console.log("[ERR]", "La contraseña debe tener minimo 8 digitos, una mayuscula, una minuscula y un numero");
        return false;
    } else {
        return true;
    }

    // console.log(pass.length);
}

// fin espacio para validacion de campo Contraseña

// module.exports = {
//     checkContrasena,
//