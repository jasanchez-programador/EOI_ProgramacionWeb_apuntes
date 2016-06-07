function validar(){

	var form = document.getElementsByTagName('form')[0];

	function enviar(e){
		// codigo postal y telefono solo admiten numeros
		e.preventDefault();

		function longCampo(valor,tipo){
			siVal = false;
			switch (tipo){
				case 'cp':
					if ( valor.length === 5 ) {
						siVal = true
					}
				case 'tel':
					if ( valor.length === 9 ) {
						siVal = true
					}
			}
			return siVal;
		}

		function valNum(valor) {
			var siNum = false;
			var numeros = "0123456789";
			for (var i=0; i<valor.length;i++){
				if ( numeros.indexOf(valor[i] ) >= 0 ){
					siNum = true;
				}
				else {
					siNum = false;
					break;
				}
			}
			return siNum; 
		}
		function valMail(valor){
			if ( valor.search(["@"]) >= 0){
				return true;
			}
			else { 
				return false;
			}
		}

		// validar codigo postal
		var cp = document.getElementsByName('CP')[0];
		var vCp = false;
		vCp = valNum(cp.value,'cp');
		if ( !vCp ){
			alert("solo se admiten numeros en Codigo Postal");
			cp.focus();
			cp.select(); // texto seleccionado
		}
		else {
			vCp = longCampo(cp.value,'cp');
			if ( !vCp ){
				alert("Debe tener 5 digitos");
				cp.focus();
				cp.select();
			}
			else {
				// validar telefono
				var tel = document.getElementsByName('tel')[0];
				var vTel = false;
				vTel = valNum(tel.value,'tel');
				if ( !vTel ){
					alert("solo se admiten numeros en teléfono");
					tel.focus();
					tel.select();
				}
				else {
					vTel = longCampo(tel.value,'tel');
					if ( !vTel ){
						alert("Debe tener 9 digitos");
						tel.focus();
						tel.select();
					}
					else {
						// validar mail
						var mail = document.getElementsByName("mail")[0];
						var c_mail = document.getElementsByName("c_mail")[0];
						var vMail = valMail(mail.value);
						if ( !vMail ){
							alert("Email necesita arroba(@)");
							mail.focus();
							mail.value = "";
							c_mail.value = "";
						}
						else {
							if ( mail.value !== c_mail.value ) {
								alert("Los 2 emails no coinciden");
								mail.focus();
								mail.select();
								c_mail.value = "";
							}
							else {
								form.submit();
							}
						}
					}
				}
			}
		}
	}
	form.onsubmit = enviar;
}
window.onload = validar;