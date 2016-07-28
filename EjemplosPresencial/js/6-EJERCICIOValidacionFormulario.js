/*
	asegurarse que la password tiene tambien al menos: 
	1 numero
	1 mayuscula
	y te alerte por ello

	cuando se envie el formulario correctamente:
	deshabilitar boton para no enviarlo por segunda vez
	que se cambie su texto a enviando...
*/

/*
	Si quisieramos comprobar desde javascript que los elementos del formulario
	han sido validados o no con :valid :invalid required pattern 
	podemos usar la funcion booleana:
	elemento.checkValidity() --> devuelve true o false!!!
*/
window.onload = function(){
	var enviar = document.getElementById('enviar');
	var inputPass = document.getElementById("pass");

	// array para comprobar si la contraseña tiene un número
	var numeros = "1234567890";
	var siNum = false;
	var siMay = false;

	// al perder el foco la contraseña
	enviar.onclick = function(ev){
		var ev = ev | window.event;
		ev.preventDefault;

		var pass = inputPass.value;
		// comprobar si hay una mayuscula
		if ( pass.search("[A-Z]")  >= 0 ){
				siMay = true;
		}
		// comprobar si hay un numero
		for (var i=0; i<=pass.length;i++){
			if ( siNum === false && numeros.indexOf(pass[i]) >= 0 ){
				siNum = true;
				break;
			}
		}
		/* si falta un numero o una mayuscula
		muestro una alerta indicandolo y pasado 1 segundo
		le devuelvo el foco vaciando la contraseña
		*/
		if ( siNum === false || siMay === false ){
			alert("falta una mayúscula o número");
			// setTimeout(FuncionEjecutarAlPasarElTimeout,TimeoutEnSegundos)
			setTimeout(function(){
				inputPass.focus();
				inputPass.value="";
			},10);	
		}
		else {
			document.getElementsByTagName('form')[0].submit();
		}
	}
	document.onkeypress = function(ev){
		var ev = ev || window.ev;
		if (String.fromCharCode(ev.charCode) == 13 ){
			enviar.click();
		}

	}
}