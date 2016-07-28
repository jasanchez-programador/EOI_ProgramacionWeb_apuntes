var formularioModulo =  angular.module('formularioApp',['ngRoute']);

formularioModulo.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		when("/",{
			templateUrl:'vistas/formulario.html',
			controller: Ctrl.formularioHtml
		}).
		otherwise({redirectTo: '/'});
}]);


