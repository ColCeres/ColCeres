"use stric";

// espacio para el metodo principal
document.addEventListener("DOMContentLoaded", function() { // funcion que escucha cuando se carga la pagina
    document.getElementById("form-registro").addEventListener("submit", validateForm); //funcion que escucha cuando se activa el evento submit en el form

});


async function validateForm(event) { //funcion que llama a las funciones que van a validar los campos

    event.preventDefault(); // funcion que suspende el evento submit para que no se ejecute y asi validar los campos

    document.getElementById('nomSpan').innerHTML = ""; // limpia el span de la alerta
    document.getElementById('telSpan').innerHTML = ""; // limpia el span de la alerta
    document.getElementById('telSpan').innerHTML = ""; // limpia el span de la alerta
    document.getElementById('dirSpan').innerHTML = ""; // limpia el span de la alerta
    document.getElementById('mailSpan').innerHTML = ""; // limpia el span de la alerta
    document.getElementById('passSpan').innerHTML = ""; // limpia el span de la alerta

    // en este espacio se pondran las variables que van a recibir el true o false de las funciones que evaluan los campos del formulario

    var contrasena = checkContrasena(document.getElementById("contrasena").value); // variable que guarda el valor true o false de la validacion de los campos
    var mail = checkCorreo(document.getElementById("correo").value); // variable que guarda el valor de true o false de validacion de correo
    var dir = checkDir(document.getElementById("direccion").value); // variable que guarda el valor true o false de la validacion de los campos
    var tel = checkTelefono(document.getElementById("telefono").value); // variable que guarda el valor true o false de la validacion de los campos
    var nom = checkNombre(document.getElementById("nombre").value); // variable que guarda el valor true o false de la validacion de los campos
    var txtContrasena = document.getElementById("contrasena").value; // variable que guarda el valor del campo
    var txtMail = document.getElementById("correo").value; // variable que guarda el valor del campo
    var txtDir = document.getElementById("direccion").value; // variable que guarda el valor del campo
    var txtTel = document.getElementById("telefono").value; // variable que guarda el valor del campo
    var txtNom = document.getElementById("nombre").value; // variable que guarda el valor del campo

    if (nom && tel && dir && mail && contrasena) { // condicional que evalua si las variables son true y asi activar el evento submit del form
        // this.submit();
        // TODO do something here to show user that form is being submitted
        let usuario = {
            "nombre": `${txtNom}`,
            "telefono": `${txtTel}`,
            "direccion": `${txtDir}`,
            "correo": `${txtMail}`,
            "contrasena": `${txtContrasena}`
        }
        var respuesta = await setUser(usuario);
        console.log(`[respuesta en formvalidate] ${respuesta}`);

    }
}

function setUser(usuario) {
    fetch('http://127.0.0.1:3000/usuarios', {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res.status);
            return res
        })
        .catch(e => { console.error(e) })

}

async function getUsers() {

    const url = `http://127.0.0.1:3000/usuarios`;
    const params = {
        method: "GET",
        // body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };
    return await fetch(url, params)
        .then(response => {
            return response.json();
        }).then(result => {
            return {
                result: result,
            };
        })
        .then(result => {
            console.log(result.result.body)
        })
        .catch((err) => {
            return {
                message: err.message
            }

        })


}

// fin de espacio para medoto principal

// espacio para validacion de campo Nombre
function checkNombre(nom) {
    const nomReg = /^([a-zA-Z ]){4,30}$/;
    console.log("Test Nombre: " + nomReg.test(nom));
    // console.log(nom.length);

    if (!nomReg.test(nom)) {
        document.getElementById('nomSpan').innerHTML = "Por favor verifique el nombre, minimo 4, maximo 30 y sin números.";
        document.getElementById('nombre').focus();
        console.log("[ERR Registro - Nombre]", "Por favor verifique el nombre, minimo 4, maximo 30 y sin números.");
        return false;
    } else {
        return true;
    }
}

// fin espacio para validacion de campo Nombre

// espacio para validacion de campo Telefono
function checkTelefono(tel) {

    const telReg = /^([0-9]){7,7}$/;
    console.log("Test Telefono: " + telReg.test(tel));

    if (!telReg.test(tel)) {
        document.getElementById('telSpan').innerHTML = "Por favor verifique el numero ingresado, solo admite numeros y 7 digitos.";
        document.getElementById('telefono').focus();
        console.log("[ERR Registro - Telefono]", "Por favor verifique el numero ingresado, solo admite numeros y 7 digitos.");
        return false;
    } else {
        return true;
    }
}

// fin espacio para validacion de campo Telefono

// espacio para validacion de campo Direccion

function checkDir(dir) {

    const dirReg = /^([0-9a-zA-Z #-]){1,50}$/;
    console.log("Test Dir: " + dirReg.test(dir));

    if (!dirReg.test(dir)) {
        document.getElementById('dirSpan').innerHTML = "Por favor verifique la dirección, debe tener máximo 50 caracteres y solo # y - como especiales.";
        document.getElementById('direccion').focus();
        console.log("[ERR Registro - Direccion]", "Por favor verifique la dirección, debe tener máximo 50 caracteres y solo # y - como especiales.");
        return false;
    } else {
        return true;
    }
}

// fin espacio para validacion de campo Direccion

// espacio para validacion de campo Correo
function checkCorreo(mail) {

    const regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,8})+$/;
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
//     checkNombre,
//     checkTelefono,
//     checkDir,
//     checkCorreo,
//     checkContrasena
// }