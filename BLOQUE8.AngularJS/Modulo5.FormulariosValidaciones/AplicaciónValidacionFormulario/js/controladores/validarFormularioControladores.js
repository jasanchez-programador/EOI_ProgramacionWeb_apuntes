var Ctrl = (function(){
	// funcion que controla la vista principal para devolver todos los usuarios
	var _formularioHtml = function ($scope,$window,$log){

		// Objeto usado para crear la lista de coches a elegir
		$scope.coches = [
			{marca:"mazda",modelo:"6",pais:"Japon"},
			{marca:"mazda",modelo:"CX-5",pais:"Japon"},
			{marca:"opel",modelo:"Insignia",pais:"Alemania"},
			{marca:"opel",modelo:"Astra",pais:"Alemania"},
			{marca:"renault",modelo:"Megane",pais:"Francia"},
			{marca:"renault",modelo:"Laguna",pais:"Francia"}
		]
		
		$scope.marcaModelo = function(car){
			return car.marca + " " + car.modelo;
		};

		// para determinar si debemos activar el boton de submit
		// porque el formulario es valido
		$scope.activoEnvio = function(){
			// si el formulario es invalido devuelvo true
			return $scope.miFormularo1.$invalid;
		}

		// Pintar el objeto JSON de datos con los datos a enviar al servidor
		$scope.pintarDatos = function(){
			$log.log("funciona ng-click");
			$log.log(JSON.stringify($scope.datos))
		}

		// Ejecutado al enviar el formulario
		// Invocado en:
		// --> etiqueta form
		// --> atributo ng-submit
		$scope.enviarFormulario = function(){
			$window.alert(JSON.stringify($scope.datos));
		}
	};

	return {
		formularioHtml: _formularioHtml
	};
})();