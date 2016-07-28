// Este es nuestro controlador que DEFINE los eventos que manejamos
// necesita tener los elementos del DOM seleccionados
// acceso a la vista para modificarla 

define(['elementosDOM','controlador','vista'],function(eDom,c,v){
	var _init = function (){
		eDom.btnCrearPunto.on('click',c.btnClickCrearPunto);
		eDom.inputMoverX.on('blur',v.activarBotonMover);
		eDom.inputMoverY.on('blur',v.activarBotonMover);
		eDom.btnMoverPunto.on('click',c.btnClickMoverPunto);
	}
	return {
		init: _init
	}
});