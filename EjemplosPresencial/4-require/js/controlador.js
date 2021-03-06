// controlador que crea las funciones que 
// dan la funcionalidad cuando se actua con la vista
// SOLO TENEMOS :
//	--> HACER CLICK EN 2 BOTONES para crear o mover el punto
//	--> Comprobar si hay que activar o desactivar el boton de mover
define(['elementosDOM','vista','punto2D','utilidades'],function(eDom,v,punto,utils){
	var p = null;
	
	var _btnClickCrearPunto = function(){
		var x = v.obtenerValor(eDom.inputInicioX) || 0;
		var y = v.obtenerValor(eDom.inputInicioY) || 0;
		try{
			if ( utils.esNum(x) && utils.esNum(y) ){
				p = new punto.Punto2D(x,y);
				var sms = utils.diaHoraPunto(p.toString());
				v.actualizarConNuevoPunto(eDom.divInfoPuntos,sms);
			}
		}
		catch (e){
			alert("ERROR: " + e.message);
			v.vaciarValor(eDom.inputInicioX);
			v.vaciarValor(eDom.inputInicioY);
			v.darFoco(eDom.inputInicioX);
		}
	}

	var _btnClickMoverPunto = function(){
		var x = v.obtenerValor(eDom.inputMoverX);
		var y = v.obtenerValor(eDom.inputMoverY);
		try {
			if ( utils.esNum(x) && utils.esNum(y) ){
				p.moverX(x);
				p.moverY(y);
				var sms = utils.diaHoraPunto(p.toString());
				v.actualizarPuntoActual(eDom.divInfoPuntos,sms);
			}
		}
		catch(e){
			alert("ERROR: " +e.message);
		}
	}
	var _comprobarBotonMover = function(){
			if ( utils.esVacio(v.obtenerValor(eDom.inputMoverX)) && utils.esVacio(v.obtenerValor(eDom.inputMoverY)) ) {
				v.activarBtnMover();
				//eDom.btnMoverPunto.attr({'disabled': 'disabled'});
			}  
			else {
				v.desactivarBtnMover();
				//eDom.btnMoverPunto.removeAttr('disabled');
			}	
	};

	return {
		btnClickCrearPunto: _btnClickCrearPunto,
		btnClickMoverPunto: _btnClickMoverPunto,
		comprobarBotonMover: _comprobarBotonMover
	}
});