var usuariosModulo = angular.module('usuariosApp',['ngRoute']);

usuariosModulo.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		when("/",{
			templateUrl:'vistas/todosLosUsuarios.html',
			controller: Ctrl.todosLosUsuariosCtrl
		}).
		//:id es un parametro pasado a la URL
		// el controlador los recoge en $routeParams.id
		// se ha generado desde alguna otra vista!!!
		when("/id/:id",{
			templateUrl:'vistas/id.html',
			controller: Ctrl.idCtrl
		}).
		//:userId es un parametro pasado a la URL
		// el controlador los recoge en $routeParams.userId
		// se ha generado desde alguna otra vista!!!
		when("/usuario/:userId",{
			templateUrl:'vistas/usuario.html',
			controller: Ctrl.usuarioCtrl
		}).
		otherwise({redirectTo: '/'});
}]);