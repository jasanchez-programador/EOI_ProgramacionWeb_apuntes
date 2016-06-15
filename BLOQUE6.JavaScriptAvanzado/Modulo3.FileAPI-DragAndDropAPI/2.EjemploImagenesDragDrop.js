$(document).ready(function(){
	// seleccionamos la img para desconectarla del div al empezar a arrastrar
	var imgDD = null;
	$('img').on('dragstart',function(ev){
		imgDD = $(this);

	})
	// seleccionamos el div donde dejar el fichero seleccionado
	$('div.row').on({
		'dragover':function(ev){
			ev.stopPropagation() // evita que se propage la clase hasta el body
			ev.preventDefault();
			$(this).addClass("dentro");
		},
		'dragleave': function(ev){
			ev.stopPropagation() // evita que se propage la clase hasta el body
			ev.preventDefault();
			$(this).removeClass("dentro");	
		},
		'drop': function(ev){
			imgDD.detach();
			$(this).append(imgDD);
			$(this).removeClass("dentro");
		}
	})
});