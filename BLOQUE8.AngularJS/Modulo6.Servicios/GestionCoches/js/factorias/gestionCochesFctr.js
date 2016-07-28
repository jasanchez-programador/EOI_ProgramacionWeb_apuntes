var Fctr = (function(){
	var _garaje = function(){
		return (function(){
			var almacen = [];

			this._ponerCoche = function(c){
				almacen.push(c);
			}
			this._quitarCoche = function(indice){
				almacen.splice(indice, 1)
			}
			this._devolverCoches = function(){
				return almacen;
			}
			this._existeCoche = function(c){
				var existe = null;
				var posicion = -1;
				for (pos in almacen){
					if ( c.getMarca() != almacen[pos].getMarca() || almacen[pos].getModelo() != c.getModelo() || almacen[pos].getPais() != c.getPais()){
						existe = false;
					}
					else{
						existe = true;
						posicion = pos
						break;
					}
				}
				return posicion
			}
			
			return {
				ponerCoche: _ponerCoche,
				quitarCoche: _quitarCoche,
				devolverCoches: _devolverCoches,
				existeCoche: _existeCoche
			}
		})()
	}

	return {
		garaje: _garaje
	}
})()