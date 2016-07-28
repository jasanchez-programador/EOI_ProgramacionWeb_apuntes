var Srv = (function(){
	var _coche = function(){
		var marca = '';
		var modelo = '';
		var pais = '';

//Getters y Setters para las propiedades del coche
		this.setMarca = function(ma){
			this.marca = ma;
		}
		this.getMarca = function(){
			return this.marca
		}
		this.setModelo = function(mo){
			this.modelo = mo;
		}
		this.getModelo = function(){
			return this.modelo
		}
		this.setPais = function(p){
			this.pais = p;
		}
		this.getPais = function(){
			return this.pais
		}
// Crear una instancia de coche 
// con sus valores propios en las propiedades
// y con acceso a los metodos para ver dichas propiedades
		this.cocheNuevo = function(ma,mo,p){
			this.setMarca(ma);
			this.setModelo(mo);
			this.setPais(p);
			return {
				marca: this.getMarca(),
				modelo: this.getModelo(),
				pais: this.getPais(),
				getMarca: this.getMarca,
				getModelo: this.getModelo,
				getPais: this.getPais,
			}
		}	
	}
	return {
		coche: _coche
	}
})()