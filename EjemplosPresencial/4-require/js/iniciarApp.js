// Este es nuestro controlador que DEFINE los eventos que manejamos
// necesita tener: 
//	1.- los elementos del DOM seleccionados
// 	2.- que funciones se ejecutaran en el controlador 

define(['elementosDOM','controlador'],function(eDom,c){
	var _init = function (){
		eDom.btnCrearPunto.on('click',c.btnClickCrearPunto);
		eDom.inputMoverX.on('blur',c.comprobarBotonMover);
		eDom.inputMoverY.on('blur',c.comprobarBotonMover);
		eDom.btnMoverPunto.on('click',c.btnClickMoverPunto);
	}
	return {
		init: _init
	}
});