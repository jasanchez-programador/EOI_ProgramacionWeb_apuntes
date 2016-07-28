$(document).ready(function(){
	var geoID = null;
	$('#crear').on('click',function(){
		//obtener
		// invocamos a la funcion getCurrentPosition
		// mostrar es la funcion que recibira la posicion
		// siError es la funcion que se invocara si hay errores al obtener localizacion
		// tuneo es:
		var tuneo = {
			enableHighAccuracy: true, // lo mas preciso posible
			timeout: 10000, // tiempo maximo para obtener localizacion
			maximumAge: 600 // cada cuanto tiempo pide la nueva localizacion(watchPosition)
		};
		// para obtener la localizacion 
		geoId = navigator.geolocation.getCurrentPosition(function(lapos){
				var lat = lapos.coords.latitude;
				var lon = lapos.coords.longitude;
				
				var origenimg = 'http://maps.google.com/maps/api/staticmap';
				origenimg += '?center=' + lat + ',' + lon + 
				'&zoom=12&size=400x400&sensor=false&markers=' + lat + ',' + lon;
				//origenimg += '?center=' + lapos.coords.latitude + ',' + lapos.coords.longitude + '&zoom=12&size=400x400';
				//origenimg += '&sensor=false&markers=' + lapos.coords.latitude + ',' + lapos.coords.longitude;
				
				var zonamapa = document.getElementById('mapa');
				var mapa = '<img src="' + origenimg + '">';
				// cambiamos el contenido de la seccion
				zonamapa.innerHTML = mapa;
		},
		function(err){
			switch (err.code){
				case err.PERMISSION_DENIED:
		            alert("Debe usted permitir el acceso a su posición para que la aplicación pueda funcionar");
		            break;
		        case err.POSITION_UNAVAILABLE:
		            alert("La información sobre su posición actual no está disponible");
		            break;
		        case err.TIMEOUT:
		            alert("No he podido obtener su posición en un tiempo razonable");
		            break;
		        default:
		            alert("CodigoError: " + elerror.code + " MensajeDeError: " + elerror.message);
		            break;
		    }				
		},
		tuneo);
	});
	
	$('#borrar').on('click',function(){
		//pararGeoloc
		// paramos la geolocalizacion con id devuelto por watchPosition()
		navigator.geolocation.clearWatch(geoId);
		// recargo la pagina para comenzar
		//location.reload();
		var m = document.getElementById('mapa');
		m.innerHTML="";

	});
	
});