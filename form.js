'use stric';

const formulario= document.getElementById("formulario_reg"); //Se usa para acceder al id de un formulario
const inputs= document.querySelectorAll("#formulario_reg input") //Con el uso de query Selector se accede a todos los inputs y con la palabra "All" nos generá un arreglo (array).


const expresiones = {
	nombrejuego: /^[a-z\s?A-Z\s?]{2,25}$/, // Letras, numeros, guion y guion_bajo
	contrato: /^[a-z\s?A-Z\s?]{3,25}$/,  // Letras, pueden llevar acentos.
	password: /^.{8,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// Dentro de la constante validar formulario se ejecuta una funcion tipo flecha que contiene in switch para verificar las expresiones regulares dado un target name.

const validarFormulario = (e) => {
	switch (e.target.name){     
		case "nombrejuego":
			Validarcampo(expresiones.nombrejuego, e.target.value, "nombre" );
		break
			
		case "contrato":
			Validarcampo(expresiones.contrato, e.target.value, "contrato" );
		break

		case "password":
			Validarcampo(expresiones.password, e.target.value, "password" );
			validarpassword();
		break

		case "password2":
			validarpassword();
		break

		case "email":
			Validarcampo(expresiones.email, e.target.value, "email" );
		break

		case "telefono":
			Validarcampo(expresiones.telefono, e.target.value, "telefono" );
		break

	}
}

const Validarcampo = (expresiones, input, campo) => {
	if(expresiones.test(input)){
		document.getElementById(`formulario--${campo}`).classList.remove("formulario__grupo-incorrecto");
		document.getElementById(`formulario--${campo}`).classList.add("formulario__grupo-correcto");
		document.querySelector(`#formulario--${campo} i`).classList.remove("fa-times-circle");
		document.querySelector(`#formulario--${campo} i`).classList.add("fa-check-circle");
		document.querySelector(`#formulario--${campo} .formulario__grupo-input-error`).classList.remove("formulario__grupo-input-error-activo");
	}else{
		document.getElementById(`formulario--${campo}`).classList.add("formulario__grupo-incorrecto");
		document.getElementById(`formulario--${campo}`).classList.remove("formulario__grupo-correcto");
		document.querySelector(`#formulario--${campo} i`).classList.add("fa-times-circle");
		document.querySelector(`#formulario--${campo} i`).classList.remove("fa-check-circle");
		document.querySelector(`#formulario--${campo} .formulario__grupo-input-error`).classList.add("formulario__grupo-input-error-activo");
	}
}

const validarpassword = () => {
	const inputpassword1 = document.getElementById("password_1");
	const inputpassword2 = document.getElementById("password_2");
	if (inputpassword1.value !== inputpassword2.value){
		document.getElementById(`formulario--password2`).classList.add("formulario__grupo-incorrecto");
		document.getElementById(`formulario--password2`).classList.remove("formulario__grupo-correcto");
		document.querySelector(`#formulario--password2 i`).classList.add("fa-times-circle");
		document.querySelector(`#formulario--password2 i`).classList.remove("fa-check-circle");
		document.querySelector(`#formulario--password2 .formulario__grupo-input-error`).classList.add("formulario__grupo-input-error-activo");
	} else{
		document.getElementById(`formulario--password2`).classList.remove("formulario__grupo-incorrecto");
		document.getElementById(`formulario--password2`).classList.add("formulario__grupo-correcto");
		document.querySelector(`#formulario--password2 i`).classList.remove("fa-times-circle");
		document.querySelector(`#formulario--password2 i`).classList.add("fa-check-circle");
		document.querySelector(`#formulario--password2 .formulario__grupo-input-error`).classList.remove("formulario__grupo-input-error-activo");
	}
}

inputs.forEach((input)=>{
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario); //El evento blur es disparado cuando un elemento ha perdido su foco
});

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
});
