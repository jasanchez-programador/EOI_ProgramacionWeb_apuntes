var holaMundoMod = angular.module('holaMundoApp',['ngRoute']);

// MIS OBJETOS
holaMundoMod.service('saludoSrv', function() {
    this.sayHello = function() {
        return "Hello, Servcio!";
    };
    this.sayHello2 = function(a) {
        return "Hello, Servcio! " + a;
    };
});

holaMundoMod.factory('saludoFctr', function() {
    return {
        sayHello: function() {
            return "Hello, Factoria!" ;
        },
        sayHello2: function(a) {
            return "Hello, Factoria! " + a;
        }
    };
});

// Configuracion de vistas y controladores
holaMundoMod.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		when("/",{
			templateUrl:'vistas/vistaHolaMundo.html',
			controller: Ctrl.saludarCtrl
		}).
		otherwise({redirectTo: '/'});
}])
