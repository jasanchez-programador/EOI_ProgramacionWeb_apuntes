var usuariosModulo = angular.module('usuariosApp',['ngRoute']);

usuariosModulo.directive('ngMyNav', function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'vistas/myNav.html',
		// name: '',
		// priority: 1,
		// terminal: true,
		//scope: // {} = isolate, true = child, false/undefined = no change
		// Para logica de Negocio
		controller: function($scope, $element, $attrs, $transclude) {
			// Defino que se mostrara en los menus del nav
			$scope.links = {};
			$scope.links.m1 = "inicio";
			$scope.links.m2 = "Menu 2";
			$scope.links.m3 = "Submenu 1";
			$scope.links.m4 = "Submenu 2";
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			// para manupular el DOM
			iElm.find('ul li').bind('mouseover',function(){
				$(this).css({'-webkit-transform': 'scale(1.1,1.5)'})
			})
			iElm.find('ul li').bind('mouseleave',function(){
				$(this).css({'-webkit-transform': 'none'})
			})
		}
	};
});

usuariosModulo.directive('ngBigScale', function(){
	// Runs during compile
	return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		//templateUrl: 'vistas/myNav.html',
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		//controller: Ctrl.todosLosUsuariosCtrl, // Para logica de Negocio
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			// para manupular el DOM
			iElm.bind('mouseover',function(){
				$(this).css({'-webkit-transform': 'scale(1.1,1.5)'})
			})
			iElm.bind('mouseleave',function(){
				$(this).css({'-webkit-transform': 'none'})
			})

		}
	};
});


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