var gestionCochesMod = angular.module('gestionCochesApp',['ngRoute']);

gestionCochesMod.service('cochesSrv', Srv.coche)
gestionCochesMod.factory('garajeFctr', Fctr.garaje);

// Configuracion de vistas y controladores
gestionCochesMod.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		when("/",{
			templateUrl:'vistas/listarGaraje.html',
			controller: Ctrl.listarGarajeCtrl
		}).
		when("/crear",{
			templateUrl:'vistas/crearEnGaraje.html',
			controller: Ctrl.crearEnGarajeCtrl
		}).
		when("/borrar",{
			templateUrl:'vistas/borrarEnGaraje.html',
			controller: Ctrl.borrarEnGarajeCtrl
		}).
		otherwise({redirectTo: '/'});
}])
