// Patron Modulo Revelado
// funcion autoejecutada que devuelve los metodos en el NAMESPACE :
//	Calc
//	Calc.Cientifica
// 		--> Las variables usadas para el NAMESPACE no se "PEGARAN" con 
//		--> Los js que la invoquen!!!
var Calc = (function(){
	// interna para determinar si son numeros
	var __sonNumeros = function(arg1,arg2){
		// si no son numeros devuelvo una excepcion
		if ( isNaN(arg1) || isNaN(arg2) || arg1.length == 0 || arg2.length == 0) {
			throw new Error("Mi Error1: Los argumentos no son numeros" )
		}
		else {
			return true;
		}
	}

	// las expuestas en el espacio de nombre Calc
	var _suma = function(n1,n2){
		if ( __sonNumeros(n1,n2) ){
			return parseInt(n1) + parseInt(n2);
		}
	}
	var _resta = function(n1,n2){
		if ( __sonNumeros(n1,n2) ){
			return parseInt(n1) - parseInt(n2);
		}
	}
	var _multiplicacion = function(n1,n2){
		if ( __sonNumeros(n1,n2) ){
			return parseInt(n1) * parseInt(n2);
		}
	}
	var _division = function(n1,n2){
		if ( __sonNumeros(n1,n2) ){
			if (n2 == 0){
				throw new Error("Mi ERROR 2: El segundo argumento no puede ser 0 en una division");
			}
			else {
				return parseInt(n1) / parseInt(n2);
			}
		}
	}
	// las expuestas en el espacio de nombres Calc.Cientifica
	var Cientifica = (function(){
		var _potencia = function(n1,n2){
			if ( __sonNumeros(n1,n2) ){
				var __res = parseInt(n1);
				for (var i=1;i<n2;i++){
					__res *= parseInt(n1)
				}
				return parseInt(__res);
			}
		}
		return {
			potencia: _potencia
		}
	})()

	return {
		suma: _suma,
		resta: _resta,
		multiplicacion: _multiplicacion,
		division: _division,
		Cientifica: Cientifica
	}
})()