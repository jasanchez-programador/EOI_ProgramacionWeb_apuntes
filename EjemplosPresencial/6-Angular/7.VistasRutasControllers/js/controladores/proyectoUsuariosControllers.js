
var Ctrl = (function(){
	// funcion que controla la vista principal para devolver todos los usuarios
	var _todosLosUsuariosCtrl = function ($http,$scope){
		$http.get('http://jsonplaceholder.typicode.com/posts')
			.success(function(usuarios){
				$scope.usuarios = usuarios;
				//console.log("usuarios: " + JSON.stringify(usuarios))
			})
			.error(function(error){
				$scope.usuarios="";
				alert("ERROR: no se han encontrado usuarios " + err.code +"--"+err.message);
			});
	};


	// funcion que controla la vista cuando queremos ver un usuario concreto
	var _idCtrl = function($http,$scope,$routeParams){
		// $routeParams recoge el :id pasado desde la config
		$scope.id = $routeParams.id;
		$http.get('http://jsonplaceholder.typicode.com/posts?id='+$scope.id)
			.success(function(datosId){
				$scope.datosId = datosId[0];
			})
			.error(function(error){
				$scope.datosId="";
				alert("ERROR: no se han encontrado usuarios " + err.code +"--"+err.message);
			});
	};

	// funcion que controla la vista cuando queremos ver un usuario concreto
	var _usuarioCtrl = function($http,$scope,$routeParams){
		// $routeParams recoge el :userId pasado desde la config
		$scope.userId = $routeParams.userId;
		// inicializamos objeto ordenacion que permitira ordenar la tabla 
		// por TITULO descendente por defecto
		// o por ID 
		$scope.ordenacion = {};
		$scope.ordenacion.sentido = false; 
		$scope.ordenacion.campo = 'title';

		$http.get('http://jsonplaceholder.typicode.com/posts?userId='+$scope.userId)
			.success(function(datosUsuario){
				$scope.datosUsuario = datosUsuario;
				//console.log(JSON.stringify(datosUsuario))
			})
			.error(function(error){
				$scope.datosUsuario="";
				alert("ERROR: no se han encontrado usuarios " + err.code +"--"+err.message);
			});
	};

	return {
		todosLosUsuariosCtrl: _todosLosUsuariosCtrl,
		usuarioCtrl: _usuarioCtrl,
		idCtrl: _idCtrl
	};
})();