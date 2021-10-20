'use strict';
// variable global de array
var registros = [];

//funcion de agregar contenido al array, simula la recepcion e insercion del contenido del formulario 
function agregarRegistro() {

    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    registros.push({ nombre: nombre, telefono: telefono, direccion: direccion, correo: correo, contrasena: contrasena });
    console.log(registros);
    return registros;
}

// funcion de ordenar arreglo bajo el criterio del nombre del usuario en el array de objetos que recibe
function ordenarArreglo(arreglo) {

    //se le agrega una funcion donde se le especifica la forma en que se deben organizar los elementos del array
    arreglo.sort(function(a, b) {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    });
    console.log(arreglo);
    return arreglo;
}

//funcion para filtrar elementos por correo gmail
function filtrarCorreo(arreglo) {
    const filtro = "gmail.com"

    //se usa la funcion filtro y se le agraga una funcion anonima para indicar que se filtra por el campo correo con el criterio de gmail
    var filtrado = arreglo.filter(function(obj) { return obj.correo.indexOf(filtro) > -1 })
    console.log(filtrado);
    return filtrado;
}

// exportacion de las funciones para el bot
module.exports = {
    registros,
    agregarRegistro,
    ordenarArreglo,
    filtrarCorreo
}