"use stric";
const products = [{
            "name": "Coco",
            "src": "./design/images/images-productos/fruta/Coco.jpg",
            "alt": "Imagen de coco",
            "precio": 3500
        },
        {
            "name": "Durazno",
            "src": "./design/images/images-productos/fruta/Durazno.jpg",
            "alt": "Imagen de Durazno",
            "precio": 1900
        },
        {
            "name": "Mandarina",
            "src": "./design/images/images-productos/fruta/Mandarina.jpg",
            "alt": "Imagen de Mandarina",
            "precio": 3315
        },
        {
            "name": "Manzana",
            "src": "./design/images/images-productos/fruta/Manzana.jpg",
            "alt": "Imagen de Manzana",
            "precio": 4845
        },
        {
            "name": "Pera",
            "src": "./design/images/images-productos/fruta/Pera.jpg",
            "alt": "Imagen de Pera",
            "precio": 3500
        },
        {
            "name": "Piña",
            "src": "./design/images/images-productos/fruta/Pina.jpg",
            "alt": "Imagen de Piña",
            "precio": 1900
        },
        {
            "name": "Aguacate",
            "src": "./design/images/images-productos/fruta/Aguacate.jpg",
            "alt": "Imagen de Aguacate",
            "precio": 3315
        },
        {
            "name": "Banano",
            "src": "./design/images/images-productos/fruta/Banano.jpg",
            "alt": "Imagen de Banano",
            "precio": 4845
        },
        {
            "name": "Lechuga",
            "src": "./design/images/images-productos/verduras/Lechuga.jpg",
            "alt": "Imagen de Lechuga",
            "precio": 3500
        },
        {
            "name": "Tomate",
            "src": "./design/images/images-productos/verduras/Tomate.jpg",
            "alt": "Imagen de Tomate",
            "precio": 1900
        }
    ]
    // **********************************  alertas

// swal("Titulo de alerta", "texto de alerta", "success");
// swal("Titulo de alerta", "texto de alerta", "warning");
// swal("Titulo de alerta", "texto de alerta", "error");
// swal("Titulo de alerta", "texto de alerta", "info");

// **********************************  alertas

// espacio para el metodo principal
document.addEventListener("DOMContentLoaded", function() { // funcion que escucha cuando se carga la pagina
    document.getElementById("form-registro").addEventListener("submit", validateForm); //funcion que escucha cuando se activa el evento submit en el form

    document.getElementById('masVendidos').innerHTML = `
        ${products.map(masVendidosTemplate).join('')}
       `
});

function masVendidosTemplate(product) {
    return `
    <div class="imagen-vendidos-contenedor" id="imagen-vendidos-contenedor">
        <img class="imagen_vendidos" src="${product.src}" alt="${product.alt}">
        <p class="Imagen-texto">${product.name}</p>
        <p class="Imagen-precio">$${product.precio} (und)</p>
        <div class="Imagen-boton-contenedor"><a class="Imagen-boton" href="#">Comprar</a></div>
    </div>
    `
}

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
    var chkGenero = '';
    if (document.getElementById('m').checked == true) {
        chkGenero = 'm';
    } else {
        chkGenero = 'f';
    }

    if (nom && tel && dir && mail && contrasena) { // condicional que evalua si las variables son true y asi activar el evento submit del form
        // this.submit();
        // TODO do something here to show user that form is being submitted
        let usuario = {
            "nombre": `${txtNom}`,
            "genero": `${chkGenero}`,
            "telefono": `${txtTel}`,
            "direccion": `${txtDir}`,
            "correo": `${txtMail}`,
            "contrasena": `${txtContrasena}`
        }
        var respuesta = await setUser(usuario);
        console.log(`[respuesta en formvalidate] ${respuesta}`);

    }
}

async function setUser(usuario) {

    // const url = `http://127.0.0.1:3000/usuarios`;
    const url = `https://colceres-backend.herokuapp.com/usuarios`;
    const params = {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
            "Content-Type": "application/json"
        }
    };
    return await fetch(url, params)
        .then(response => {
            return response.json();
        }).then(result => {
            console.log(result);
            if (result.error != '') {
                swal("Error al registrar usuario", "Es posible que el usuario ya esté registrado", "error")

            } else {
                swal("Usuario Registrado", "Usuario Agregado con exito", "success")
                document.getElementById('form-registro').reset();

            }
        })
        .catch((err) => {
            return {
                message: err.message
            }

        })

}

async function getUsers() {

    // const url = `http://127.0.0.1:3000/usuarios`;
    const url = `https://colceres-backend.herokuapp.com/usuarios`;
    const params = {
        method: "GET",
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