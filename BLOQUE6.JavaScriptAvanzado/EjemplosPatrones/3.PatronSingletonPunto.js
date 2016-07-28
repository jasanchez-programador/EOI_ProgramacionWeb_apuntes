// Patron singelton
// Objetos de una unica instancia
// NO SE PUEDE INICIALIZAR!!!
//  el NAMESPACE será la variable que cree la instancia
// 		--> Las variables usadas para el NAMESPACE no se "PEGARAN" con 
//		--> Los js que la invoquen!!!
var Punto2D = (function(p){
	// Propiedad privada para evitar que haya 2 instancias del punto
	var __instancia;
	// funcion que devuelve:
	// 	--> el punto si ya fue instanciado (PRIMERA VEZ)
	// 	--> instancia del punto ya creado (RESTO DE VECES)
	this._Singleton = function() {
		if (__instancia){
			return __instancia;
		}
		__instancia = this;
		// definicion de sus propiedades y metodos propios
		// propiedades y metodos publicos
		this.x = 0;
		this.y = 0;
		
		this.moverX = function(pos) {
			this.x += parseInt(pos);
		}
		this.moverY = function(pos){
			this.y += parseInt(pos);
		}
		// Redefinimos la funcion que pinta donde esta el punto
		this.toString = function(){
			return "(" + this.x + "," + this.y + ")";
		}
	}
	// para que funcione:
	// p = Punto2D.getInstance()

	// _Singleton.getInstance = function() {
	// 	return __instancia || new _Singleton();
	// }
	return _Singleton;
})()




