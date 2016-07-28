$(document).ready(function(){
	// seleccionamos la img para desconectarla del div al empezar a arrastrar
	var imgDD = null;

	// 1º -- Que hago si comienzo a arrastrar la imagen
	// TODAS LAS IMAGENES SE PUEDEN ARRASTRA; 
	// 		--> EL RESTO DE ELEMENTOS SE HACEN ARRATRABLES con el atributo draggable de html 
	$('img').on('dragstart',function(ev){
		console.log("ENTRO DRAGSTART")
		imgDD = $(this);

	});
	// seleccionamos el div donde dejar el fichero seleccionado
	$('div.soltable').on({
		// QUE HACEMOS SI SOLTAMOS AQUI LA IMAGEN
		'drop': function(ev){
			console.log("DROP")
			imgDD.detach(); //DESCONECTO LA IMAGEN DEL ORIGEN
			$(this).append(imgDD); // Y LA CONECTO 
			$(this).removeClass("dentro");
		},
		// QUE HACEMOS SI ENTRAS EN ESTA ZONA ARRASTRANDO LA IMAGEN
		'dragover':function(ev){
			console.log("DRAGOVER")
			ev.stopPropagation() // evita que se propage la clase hasta el body
			ev.preventDefault();
			$(this).addClass("dentro");
		},
		// QUE HACEMOS SI SALES DE ESTA ZONA ARRASTRANDO LA IMAGEN
		'dragleave': function(ev){
			console.log("DRAGLEAVE")
			ev.stopPropagation() // evita que se propage la clase hasta el body
			ev.preventDefault();
			$(this).removeClass("dentro");	
		}
	})
});