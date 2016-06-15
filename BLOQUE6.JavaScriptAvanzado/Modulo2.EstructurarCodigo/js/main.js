// INICIO donde llamos a Jquery, bootstrap y 
// nuestro modulo que define los EVENTOS en los qe escuchamos!!!!
equirejs.config({
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

require(['jquery','bootstrap','iniciarApp'],function($,_bootstrap,app){
	app.init();

});