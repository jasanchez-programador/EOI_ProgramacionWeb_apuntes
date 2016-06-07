function noEntry(field) {
	mt=field.value;
	if (mt.length<1) {
		alert("El campo debe rellenarse");
		field.focus();
		return false;
	}else { return true; }
}
function EsTelefono(field) {
	var valid = "+0123456789"
	var ok = "yes";
	var temp;
	for (var i=0; i<field.value.length; i++) {
		temp = "" + field.value.substring(i, i+1);
		if (valid.indexOf(temp) == "-1") ok = "no";
	}
	if (ok == "no") {
		alert("Entrada Incorrecta!  Sólo se admiten números y el símbolo '+'");
		field.focus();
		field.select();
		return false;
   	}
	return true;
}
function EsTarjeta(field) {
	var valid = "0123456789"
	var ok = "yes";
	var temp;
	for (var i=0; i<field.value.length; i++) {
		temp = "" + field.value.substring(i, i+1);
		if (valid.indexOf(temp) == "-1") ok = "no";
	}
	if (ok == "no") {
		alert("Entrada Incorrecta!  Sólo se admiten números");
		field.focus();
		field.select();
		return false;
   	}
	if (field.value.length != 16) {
		alert("Entrada Incorrecta!  El número de tarjeta debe tener 16 dígitos");
		field.focus();
		field.select();
		return false;
   	}
	return true;
}
function validate() {	
     if(noEntry(document.forms[0].elements[0]) == false) return;
     if(noEntry(document.forms[0].elements[1]) == false) return;
     if(noEntry(document.forms[0].elements[2]) == false) return;
     if(noEntry(document.forms[0].elements[3]) == false) return;
     else if(EsTelefono(document.forms[0].elements[3]) == false) return;
     if(noEntry(document.forms[0].elements[4]) == false) return;
     if(noEntry(document.forms[0].elements[6]) == false) return;
     else if(EsTarjeta(document.forms[0].elements[6]) == false) return;
     if(noEntry(document.forms[0].elements[7]) == false) return;
     if(noEntry(document.forms[0].elements[8]) == false) return;
     if(noEntry(document.forms[0].elements[9]) == false) return;
     
     if(document.forms[0].elements[8].value != document.forms[0].elements[9].value){
		alert("Los campos de contraseña deben coincidir!");
		document.forms[0].elements[8].focus();
		document.forms[0].elements[8].select();
		return;
     }
     document.forms[0].submit();
}
