define(function(){

	var _esNum = function (n){
		if ( isNaN(n) ){
			throw new Error("El argumento no es numérico");
		}
		else {
			return true
		}
	}

	var _esVacio = function(texto){
		if ( texto.length <= 0 ){
			return true;
		}
		else{
			return false;
		}
	};

	var _diaHoraPunto = function(lugarPunto) {
		var f = new Date();
		var dia = f.getDate();
		var mes = f.getMonth()
		var anyo = f.getFullYear();
		var hora = f.getHours();
		var minuto = f.getMinutes();
		var segundo = f.getSeconds();

		return dia + "/" + mes + "/" + anyo 
				+ " -- " + hora + ":" + minuto + ":" + segundo 
				+ "\t" + lugarPunto;
	}

	var _obtenerColor = function(){
		var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		return randomColor;
	}

	return {
		esNum: _esNum,
		esVacio: _esVacio,
		diaHoraPunto: _diaHoraPunto,
		obtenerColor: _obtenerColor
	}
})