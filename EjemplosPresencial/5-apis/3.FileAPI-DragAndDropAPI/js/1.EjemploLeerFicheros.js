$(document).ready(function(){
	// seleccionamos el div donde dejar el fichero seleccionado
	var destino = $('div#destino');
	var tamHTML = $('span#tam');
	// escuchamos en change del input
	// que se lanza cuando se elige un fichero
	var cargarFichero = function(ev){
		// creo un LECTOR DE FICHEROS DONDE CARGAR EL FICHERO
		var fich = new FileReader();

		// Actualizamos span con el tamaño del fichero
		tamHTML.text(ev.target.files[0].size);

		// si es del input de texto
		if ( ev.target.id === "texto" ){
			// CARGO el fichero de texto en el lector
			// porque se insertara en un <p>
			// ESTA EN EL ARRAY FILES
			fich.readAsText(ev.target.files[0]);
		}
		// si el input es img
		else if (ev.target.id === 'img' ){
			// CARGO la imagen en el lector como una url 
			// porque se insertara en una <img> para su atributo src
			// ESTA EN EL ARRAY FILES
			fich.readAsDataURL(ev.target.files[0]);
		}
		// escucho en el evento que determina la carga CORRECTA del fichero
		fich.onload = function(){
			// borro la seleccion del fichero o imagen anterior
			destino.children('*').remove();
			if ( ev.target.id === "texto" ){
				// Pongo el RESULTADO de la CARGA del fichero en el div
				// con un parrafo
				destino.append(
					$('<p>').text(fich.result)
				);
			}
			else if (ev.target.id === 'img' ){
				// Pongo el RESULTADO de la CARGA del fichero en el div
				// con una imagen
				destino.append(
					$('<img>').attr("src",fich.result)
				);
			}
			
		}
		// escucho en el evento que determina la carga FALLIDA del fichero
		fich.onerror = function(e){
			alert("ERROR: " + e.message);
		}
	}
	// tenemos los ficheros y sus propiedades en la info del evento
	$('input#texto').on('change',cargarFichero);
	$('input#img').on('change',cargarFichero)
});