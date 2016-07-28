// Modulo que SELECCIONA con jquery 
// todos los elementos del DOM que usaremos

define(['jquery'],function($){
	var _btnCrearPunto = $('input#crearPunto');
	var _btnMoverPunto = $('input#moverPunto');
	var _inputInicioX = $('input#iniciox');
	var _inputInicioY = $('input#inicioy');
	var _inputMoverX = $('input#moverx');
	var _inputMoverY = $('input#movery');
	var _divInfoPuntos	= $('div#info');
	// NO SE PUEDE XQ ES ESTATICO, y en este momento NO HAY PARRAFOS
	// var _pUltimo = _divInfoPuntos.children('p:last-of-type'); 

	return{
		btnCrearPunto: _btnCrearPunto,
		btnMoverPunto: _btnMoverPunto,
		inputInicioX: _inputInicioX,
		inputInicioY: _inputInicioY,
		inputMoverX: _inputMoverX,
		inputMoverY: _inputMoverY,
		divInfoPuntos: _divInfoPuntos
	}
});