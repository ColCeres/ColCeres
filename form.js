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

// fin espacio para validacion de campo Correo


// espacio para validacion de campo Contraseña

function checkContrasena(pass) {
    if (pass.length <= 8) {
        alert("la contraseña debe tener minimo 8 digitos");
        document.getElementById('contrasena').focus();
    } else {
        return true
    }
    console.log(pass.length);

}

// fin espacio para validacion de campo Contraseña

// module.exports = {
//     checkContrasena,
// }