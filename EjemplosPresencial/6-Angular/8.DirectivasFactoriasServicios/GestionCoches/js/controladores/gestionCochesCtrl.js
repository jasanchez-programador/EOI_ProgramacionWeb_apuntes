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

	var _Drtvs = (function(){
		// Controladores para NUESTRAS directivas
		var _iniciarMenu = function($scope, $element, $attrs) {
			// Defino que se mostrara en los menus del nav
			$scope.links = {};
			$scope.links.m1 = "inicio";
			$scope.links.m2 = "Gestion Coches";
			$scope.links.m3 = "Añadir coche";
			$scope.links.m3href = "#/crear" // valor para href del <a>
			$scope.links.m4 = "Borrar coche";
			$scope.links.m4href = "#/borrar" // valor para href del <a>
		}
		var _Links = (function(){
			// Para modificar el DOM desde nuestras directivas
			var _tamanyoListaHover = function($scope, iElm, iAttrs) {
				// para manupular el DOM
				iElm.find('div > ul > li').on('mouseover',function(){
					angular.element(this).css({'-webkit-transform': 'scale(1.1,1.5)'})
				})
				iElm.find('div > ul > li').on('mouseleave',function(){
					angular.element(this).css({'-webkit-transform': 'none'})
				})
			}

			var _tamanyoElementoHover = function($scope, iElm, iAttrs) {
				// para manupular el DOM
				iElm.on('mouseover',function(){
					angular.element(this).css({'-webkit-transform': 'scale(1.1,1.5)'})
//tambien se puede: $(this).css({'-webkit-transform': 'scale(1.1,1.5)'})
				})
				iElm.on('mouseleave',function(){
					angular.element(this).css({'-webkit-transform': 'none'})
//tambien se puede: $(this).css({'-webkit-transform': 'none'})					
				})
				//console.log(angular.element('a')[0])
				//console.log(angular.element('td')[0]) // ninguno SI la vista que lo usa NO LO POSEE 
			}

			return {
				tamanyoListaHover: _tamanyoListaHover,
				tamanyoElementoHover: _tamanyoElementoHover
			}
		})()

		return {
			iniciarMenu: _iniciarMenu,
			Links: _Links
		}

	})()

	return {
		listarGarajeCtrl: _listarGarajeCtrl,
		crearEnGarajeCtrl: _crearEnGarajeCtrl,
		borrarEnGarajeCtrl: _borrarEnGarajeCtrl,
		Drtvs: _Drtvs
	}
})()