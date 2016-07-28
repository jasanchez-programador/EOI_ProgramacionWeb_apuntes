// Patron Factoria
// Objetos con multiples instancias diferentes
// SE PUEDE INICIALIZAR!!!
// el NAMESPACE será la variable que cree la instancia
// 		--> Las variables usadas para el NAMESPACE no se "PEGARAN" con 
//		--> Los js que la invoquen!!!
var Punto = function (posX){
	// propiedades y metodos publicos
	// propiedad con this
	this.x = parseInt(posX) || 0;
	// metodos del prototipo compartido por todas las instancias en MEMORIA!!!
	Punto.prototype.moverX = function(pos) {
		this.x += parseInt(pos);
	}
	Punto.prototype.toString = function() {
		return "(" + this.x + ")"
	}

	// propiedad privada de la instancia y sus metodos de acceso
	// privada con var (no se puede usar fuera porque es otro CLOUSURE)
	var smsInstancia = "Soy una Instancia del Objeto Punto";
	// metodos con this para que cada instancia tenga el suyo!!!
	this.setSmsInstancia = function(nuevo){
		smsInstancia = nuevo;
	}
	this.getSmsInstancia = function(){
		return smsInstancia;
	}
	// propiedad privada del OBJETO y sus metodos de acceso
	// privada con var (no se puede usar fuera porque es otro CLOUSURE)
	var smsObjeto = "Soy un objeto Punto";
	Punto.prototype.setSmsObjeto = function(nuevo){
		smsObjeto = nuevo;
	}
	Punto.prototype.getSmsObjeto = function(){
		return smsObjeto;
	}
}

// Punto2D con herencia
var Punto2D = function (posX,posY){
	// Llamamos al constructor del padre
	Punto.call(this,parseInt(posX));
	// definicion de sus propiedades y metodos propios
	this.y = parseInt(posY) || 0;
	Punto2D.prototype.moverY = function(pos){
		this.y += parseInt(pos);
	}
	// Redefinimos la funcion que pinta donde esta el punto
	Punto2D.prototype.toString = function(){
		return "(" + this.x + "," + this.y + ")";
	}
}
// establecemos el constructor correcto FUERA DEL CONSTRUCTOR
Punto2D.prototype = Object.create(Punto.prototype);
Punto2D.prototype.constructor = Punto2D;