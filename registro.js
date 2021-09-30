
var send = document.getElementById("btn-submit-form");
var person = [];

send.addEventListener('click', function registro() {

    agregarRegistro();

});


function agregarRegistro() {


    var nombre = document.getElementById('nombre').value;

    if (document.querySelector('input[name="genero"]:checked')) {
        var radio = document.formregistro.genero.value;
        var m = document.getElementById('M').value;
        var f = document.getElementById('F').value;
        if(radio == m){
            var genero = m;
            // console.log("El sexo es masculino mor xd", genero);
        } else  {
            var genero = f;
        } 
    }

    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    nombre = nombre.toLowerCase();
    correo = correo.toLowerCase();


    var person_add = ({ nombre, genero, telefono, direccion, correo, contrasena });

    person.push(person_add);
    console.log(person);

}

function ordenarArreglo() {



    person.sort(function (a, b) {
        if (a.nombre > b.nombre) {
            return 1;

        } else if (a.nombre < b.nombre) {
            return -1;
        } else {
            return 0
        }
        ;
    });
    
    console.log(person);



}




function filtrarCorreo() {

    // Creo un arreglo para agregar a las perosnas que tengan un correo "@gmail.com"
    var new_person = [];
    // Recorro arreglo para buscar los correos que terminen en "@gmail.com"
    for (let i = 0; i < person.length; i++) {

        var correo_gmail = person[i].correo;
        // console.log(correo_gmail);
        correo_gmail = correo_gmail.endsWith("@gmail.com");

        // Si correo_gmail is true, entonces me agrega a la persona en un nuevo arreglo
        //que tiene a las perosnas que sus correos terminan en "@gmail.com"
        if (correo_gmail) {
            new_person.push(person[i]);
        }

    }

    console.log(new_person);

}


// module.exports = filtrarCorreo;

// module.exports = {
//     agregarRegistro,
//     ordenarArreglo,
//     filtrarCorreo
// }