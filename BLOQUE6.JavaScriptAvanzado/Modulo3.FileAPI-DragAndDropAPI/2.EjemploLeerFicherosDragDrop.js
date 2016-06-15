$(document).ready(function(){
	// seleccionamos el div donde dejar el fichero seleccionado
	$('div').on({
		'dragover':function(){
			$(this).addClass("dentro");
		},
		'dragleave': function(){
			$(this).removeClass("dentro");	
		}
	})
});