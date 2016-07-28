var Ctrl = (function(){

	var _listarGarajeCtrl = function($scope,cochesSrv,garajeFctr){
		// Creamos en el modelo un almacen con todos los coches que haya en el garaje
		// y puedan ser consultados desde la vista
		$scope.almacenCoches = garajeFctr.devolverCoches();

		// Funcion interna del controlador para 
		// Crear un coche y guardarlo en el garaje 
		// Si NO EXISTE
		var __guardarCocheEnGaraje = function (ma,mo,p){
			//var c = __cocheNuevo(ma,mo,p);
			var c = cochesSrv.cocheNuevo(ma,mo,p)
			if ( garajeFctr.existeCoche(c) < 0){
				garajeFctr.ponerCoche(c);
			}	
		}

		// CREAMOS MANUALMENTE 2 coches en el garaje
		// Solo si NO EXISTEN, que es la primera vez
		__guardarCocheEnGaraje("mazda","6","Japón");
		__guardarCocheEnGaraje("opel","insignia","Alemania");
		
		// Funcion para la Vista (HTML)
		// Por ello hay que crear la funcion en el $scope !!!
		$scope.esAttrVw = function(v){
			return  ! /^get.*$/.test(v)
		}
	}

	var _crearEnGarajeCtrl = function($scope,$location, cochesSrv,garajeFctr){
		// inicializacion del coche que se guardara en el garaje 
		// con los datos del formulario que actualizan el modelo
		$scope.coche = {};

		// devuelve true o false para desactivar el boron de enviar
		// si el formulario ES INVALIDO
		$scope.activoEnvio = function(){
			return $scope.nuevo.$invalid;
		}

		// Funcion que se ejecuta al enviar el formulario
		// que crear un nuevo coche en el garaje
		// y te enviar al la pagina Raiz
		$scope.aparcar = function(){
			var c = cochesSrv.cocheNuevo($scope.coche.marca,$scope.coche.modelo,$scope.coche.pais);
			if ( garajeFctr.existeCoche(c) < 0){
				garajeFctr.ponerCoche(c);
				alert("Nuevo coche aparcado en el garaje");
				
			}
			else{
				alert("El coche ya esta aparcado en el garaje!!")
			}
			$location.path("/")
		}
	}


	var _borrarEnGarajeCtrl = function($scope,$location, cochesSrv,garajeFctr){
		// inicializacion del coche que se sacara del garaje 
		// con los datos del formulario que actualizan el modelo
		$scope.coche = {};

		// devuelve true o false para desactivar el boron de enviar
		// si el formulario ES INVALIDO
		$scope.activoEnvio = function(){
			return $scope.sacar.$invalid;
		}

		// Funcion que se ejecuta al enviar el formulario
		// saca coche del garaje
		// y te enviar al la pagina Raiz
		$scope.desaparcar = function(){
			var c = cochesSrv.cocheNuevo($scope.coche.marca,$scope.coche.modelo,$scope.coche.pais);
			if ( garajeFctr.existeCoche(c) >= 0 ){
				var pos = garajeFctr.existeCoche(c)
				garajeFctr.quitarCoche(pos);
				alert("Nuevo sacado del garaje");
			}
			else{
				alert("Coche No existente en el garaje!!!")
			}
			$location.path("/")
		}
	}


	return {
		listarGarajeCtrl: _listarGarajeCtrl,
		crearEnGarajeCtrl: _crearEnGarajeCtrl,
		borrarEnGarajeCtrl: _borrarEnGarajeCtrl
	}
})()