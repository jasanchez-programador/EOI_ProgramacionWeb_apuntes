// controlador que crea las funciones que 
// dan la funcionalidad cuando se actua con la vista
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

	return {
		btnClickCrearPunto: _btnClickCrearPunto,
		btnClickMoverPunto: _btnClickMoverPunto
	}
});