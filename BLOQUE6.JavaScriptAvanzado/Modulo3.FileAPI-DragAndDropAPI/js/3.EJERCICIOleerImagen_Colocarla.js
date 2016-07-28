$(document).ready(function(){
	var destino = $('div#destino');
	var tamFichs = $('span#tam');

	// DONDE ALMACENARE LA IMAGEN QUE ACTUALMENTE HAY QUE ARRASTRAR Y SOLTAR
	var imgDragDrop = null;

	// CARGAR IMAGENES DEL SISTEMA OPERATIVO
	$('input#img').on('change',function(ev){
		// Tenemos la info de los ficheros elegidos en el evento
		var tam = 0;
		var fich = null;
		// para cada elemento que tenga este objeto
		for (f in ev.target.files){
			// solo si la clave(f) es numerica hace referencia a los ficheros seleccionados
			
			if ( ! isNaN(f) ){
				// Primero nos quedamos con el tamaño del fichero
				tam += parseInt(ev.target.files[f].size);
				// luego CARGO la imagen en el lector como una url 
				// porque se insertara en una <img> para su atributo src
				// ESTA EN EL ARRAY FILES
				fich = new FileReader();
				fich.readAsDataURL(ev.target.files[f]);

				// cuando carge el fichero en el fileReader
				// obtenemos si resultado (fich.result)
				// y lo pintamos en una img
// LO TENEMOS QUE PONER EN UNA FUNCION AUTOEJECUTADA PORQUE
// SI ELEGIMOS VARIOS, LA CARGA ES ASINCRONA Y
// LA ULTIMA FUNCION MACHACA AL RESTO
// PERO CON LA FUNCION ANONIMA AUTOEJECUTADA, CADA UNA TIENE SU PROPIO CLOSURE
				fich.onload = (function(){
					return function(this_fich){
						var img = $('<img>').attr({'src':this_fich.target.result}) 
						destino.append(img);
						// AHORA QUE EXISTE PUEDES ASOCIAR LA FUNCION 
						// PARA EL INICIO DEL DRAG 
						img.on('dragstart',function(){
							imgDragDrop = $(this);
						})
					}
				})()
			}
		}
		tamFichs.text(tam);
	})

	$('section.soltable').on({
		// QUE HACEMOS SI SOLTAMOS AQUI LA IMAGEN
		'drop': function(){
			imgDragDrop.detach();
			$(this).append(imgDragDrop);
		},
		// QUE HACEMOS SI ENTRAS EN ESTA ZONA ARRASTRANDO LA IMAGEN
		'dragover': function(e){
			e.stopPropagation();
			e.preventDefault();
			$(this).toggleClass("dentro");
		},
		'dragleave': function(e){
			e.stopPropagation();
			e.preventDefault();
			$(this).toggleClass("dentro");
		}
	})

})