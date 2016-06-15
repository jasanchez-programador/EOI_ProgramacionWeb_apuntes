// nuestro objeto punto
define(function(){
		var __Punto = function (posX){
		// propiedades y metodos publicos
		this.x = parseInt(posX) || 0;
		__Punto.prototype.moverX = function(pos) {
			this.x += parseInt(pos);
		}
		__Punto.prototype.toString = function() {
			return "(" + this.x + ")"
		}

		// propiedad privada de la instancia y sus metodos de acceso
		var _smsInstancia = "Soy una Instancia del Objeto Punto";
		this.setSmsInstancia = function(nuevo){
			_smsInstancia = nuevo;
		}
		this.getSmsInstancia = function(){
			return _smsInstancia;
		}
		// propiedad privada del OBJETO y sus metodos de acceso
		var _smsObjeto = "Soy un objeto Punto";
		__Punto.prototype.setSmsObjeto = function(nuevo){
			_smsObjeto = nuevo;
		}
		__Punto.prototype.getSmsObjeto = function(){
			return _smsObjeto;
		}
	}

	// Punto2D con herencia
	var _Punto2D = function (posX,posY){
		// Llamamos al constructor del padre
		__Punto.call(this,parseInt(posX));
		// definicion de sus propiedades y metodos propios
		this.y = parseInt(posY) || 0;
		_Punto2D.prototype.moverY = function(pos){
			this.y += parseInt(pos);
		}
		// Redefinimos la funcion que pinta donde esta el punto
		_Punto2D.prototype.toString = function(){
			return "(" + this.x + "," + this.y + ")";
		}
	}
	// establecemos el constructor correcto FUERA DEL CONSTRUCTOR
	_Punto2D.prototype = Object.create(__Punto.prototype);
	_Punto2D.prototype.constructor = _Punto2D;

	return {
		Punto2D: _Punto2D
	}

});