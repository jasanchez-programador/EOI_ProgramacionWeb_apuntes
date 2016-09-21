
var gestionCochesMod = angular.module('gestionCochesApp',['ngRoute']);

gestionCochesMod.directive('ngMyNav', function(){
	// Runs during compile
	return {
		restrict: 'E', // Será la etiqueta <ng-my-nav>
		templateUrl: 'vistas/myNav.html', // Vista a mostrar
		controller: Ctrl.Drtvs.iniciarMenu, // Controlador para unir modelo y vista
		link: Ctrl.Drtvs.Links.tamanyoListaHover // Para modificar el DOM
	};
});

gestionCochesMod.directive('ngScaleHover', function(){
	// Runs during compile
	return {
		restrict: 'A', // sera atributo ng-scale-Hover
		link: Ctrl.Drtvs.Links.tamanyoElementoHover // Para modificar el DOM 
	};
});


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
