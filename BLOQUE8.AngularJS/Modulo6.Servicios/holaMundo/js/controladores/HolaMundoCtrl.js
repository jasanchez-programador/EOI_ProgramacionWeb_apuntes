var Ctrl = (function(){

	var _saludarCtrl = function($scope,saludoSrv,saludoFctr){
		// Ejemplo para un saludo
		$scope.saludo = {};
		$scope.saludo.srv = saludoSrv.sayHello();
		$scope.saludo.srv2 = saludoSrv.sayHello2("julio");
		$scope.saludo.fctr = saludoFctr.sayHello();	
		$scope.saludo.fctr2 = saludoFctr.sayHello2("julio");	
		console.log("Desde saludoSrv!! " + $scope.saludo.srv)
		console.log("Desde saludoSrv2!! " + $scope.saludo.srv2)
		console.log("Desde saludoFctr!! " + $scope.saludo.fctr)
		console.log("Desde saludoFctr2!! " + $scope.saludo.fctr2)
		
	}

	var _f2 = function(){

	}

	return {
		saludarCtrl: _saludarCtrl,
		f2: _f2
	}
})()