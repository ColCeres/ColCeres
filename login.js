'use strict';
// variable global de array
var registros = [];
var cont = 1;

//funcion de agregar contenido al array, simula la recepcion e insercion del contenido del formulario 
function agregarRegistro() {

    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    registros.push({ nombre: nombre, telefono: telefono, direccion: direccion, correo: correo, contrasena: contrasena });
    // console.log(registros);
    return registros;
}

function login() {
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let contrasena = document.getElementById('contrasena').value;
    let captcha = document.getElementById('captcha').value;

    console.log(`registros ${registros}`);
    console.log(`tamano registros ${registros.length}`);
    console.log(`datos en login: correo ${correo} - telefono ${telefono} - contrasena ${contrasena}`);

    const result = registros.find(registros => registros.correo == correo);
    console.log(`resultado de busqueda en registros ${result}`);

    if (cont == 1) {
        cont += 1;
        console.log(`true ${cont}`);
        return true;
    } else {
        cont += 1;
        console.log(`false ${cont}`);
        return false;
    }

    if (result != undefined) {
        if (result.correo === correo && result.telefono === telefono && result.contrasena === contrasena) {

            if (validarCAPTCHA(captcha)) {

                console.log(true);
                return true;

            } else {
                console.log('false desde validacion de captcha');
                return false;
            }


        } else {
            console.log('false desde validacion de los campos');
            return false
        }
    } else {
        console.log('false desde busqueda de registros, no hay coincidencia y es undefined');
        return false;
    }


}

function validarCAPTCHA(resp) {
    console.log(`respuesta en captcha ${resp}`);
    resp = resp.toLowerCase();
    resp = resp.replace(new RegExp(/\s/g), "");
    resp = resp.replace(new RegExp(/[àáâãäå]/g), "a");
    resp = resp.replace(new RegExp(/æ/g), "ae");
    resp = resp.replace(new RegExp(/ç/g), "c");
    resp = resp.replace(new RegExp(/[èéêë]/g), "e");
    resp = resp.replace(new RegExp(/[ìíîï]/g), "i");
    resp = resp.replace(new RegExp(/ñ/g), "n");
    resp = resp.replace(new RegExp(/[òóôõö]/g), "o");
    resp = resp.replace(new RegExp(/œ/g), "oe");
    resp = resp.replace(new RegExp(/[ùúûü]/g), "u");
    resp = resp.replace(new RegExp(/[ýÿ]/g), "y");
    resp = resp.replace(new RegExp(/\W/g), "");
    resp = resp.replace(/[^a-zA-Z 0-9.]+/g, '');

    if (resp == 'ocaso') {
        return true;
    } else {
        return false;
    }
}



module.exports = {
    validarCAPTCHA,
    login,
    registros,
    agregarRegistro
}