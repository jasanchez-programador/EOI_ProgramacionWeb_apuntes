// INICIO donde configuramos donde estan Jquery y bootstrap
// nuestro modulo que define los EVENTOS en los que escuchamos!!!!
requirejs.config({
	// alias para encontrar a jquery y bootstrap
	paths: {
		jquery: 'libs/jquery-2.1.4.min',
		bootstrap: 'libs/bootstrap.min',
		iniciarApp: 'iniciarApp'
	},
	// Especificar dependencias entre otros modulos
	// por ejemplo que bootstrap depende de jquery
	shim:{
		bootstrap: {
			deps: ['jquery']
		}
	}
});

require(['iniciarApp'],function(app){
	app.init();
});

	/*

Repartiremos los ficheros por funcionalidades:
--> PUNTO DE PARTIDA APLICACION agrupando todos los Eventos con sus funciones a ejecutar(iniciarApp.js)
--> Seleccionar los elementos del DOM (elementosDOM.js)
--> Que funciones se ejecutan cuando se lance un eveneto (controlador.js)
--> Encargado de CONSULTAR/MODIFICAR la vista (vista.js) según le marque el controlador
--> Objeto que creamos y trabajamos en la aplicacion (punto2D.js)
--> Funciones genericas (utilidades.js)

	*/