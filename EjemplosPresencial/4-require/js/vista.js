// Modulo encargado de 
// CONSULTAR/MODIFICAR
// ELEMENTOS Y PROPIEDADES del DOM

define(['elementosDOM','utilidades'],function(eDom,utils){

	var _activarBtnMover = function(){
		eDom.btnMoverPunto.attr({'disabled': 'disabled'});
	};

	var _desactivarBtnMover = function(){
		eDom.btnMoverPunto.removeAttr('disabled');	
	};

	var _obtenerValor = function(elemento){
		return elemento.val();
	};

	var _establecerValor = function(elemento,valor){
		elemento.val(valor); 
	};

	var _vaciarValor = function(elemento){
		elemento.val("");
	};


	var _darFoco = function(elemento) {
		elemento.focus();
	}
	var __crearParrafo = function(elemento,sms,color) {
		eDom.divInfoPuntos.append($('<p>').text(sms)
										.css({'color': color})
								);
	}
	var _actualizarConNuevoPunto = function(elemento,sms){
		__crearParrafo(elemento,sms,utils.obtenerColor);

	};

	var _actualizarPuntoActual = function(elemento,sms){
		var color = elemento.children('p:last-of-type').css('color');
		__crearParrafo(elemento,sms,color);
	};


	return {
		activarBtnMover: _activarBtnMover,
		desactivarBtnMover: _desactivarBtnMover,
		obtenerValor: _obtenerValor,
		establecerValor: _establecerValor,
		vaciarValor: _vaciarValor,
		darFoco: _darFoco,
		actualizarConNuevoPunto: _actualizarConNuevoPunto,
		actualizarPuntoActual: _actualizarPuntoActual
	}
});