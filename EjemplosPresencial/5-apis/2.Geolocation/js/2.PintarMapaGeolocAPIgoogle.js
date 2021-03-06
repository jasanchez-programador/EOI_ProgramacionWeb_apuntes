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
			var posicionGoogle = new google.maps.LatLng(lat,lon);

			opcionesGoogleMaps={
				// Que localizacion
				center: posicionGoogle,
				// zoom
				zoom: 15,
				// el mapa de carretera, el de por defecto en googleamps
				mapTypeId: google.maps.MapTypeId.ROADMAP 
			};

			// donde pinto el mapa
			var lugarMapa = document.getElementById('mapa');
			// mapa a pintar con las opciones
			var mapa = new google.maps.Map(lugarMapa,opcionesGoogleMaps);
			// poner la marca a la ubicacion
			var marker = new google.maps.Marker({
				position: posicionGoogle,
				map: mapa,
				//label: 'A',
				title: "estas aqui",
				animation: google.maps.Animation.BOUNCE,
				icon: '../../fotos/iconos/flower.gif',
				draggable: true
			});

			var infowindow = new google.maps.InfoWindow({
	    		content: '<p>Este mensaje se ha mostrado al hacer click en el girasol</p>'
	  		});

	  		marker.addListener('click', function() {
	  		//$(marker).on('click', function() { NO ES UN OBJETO DE JQUERY
	  			console.log("clickk")
    			infowindow.open(mapa, marker);
  			});
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
		var m = document.getElementById('mapa')
		m.innerHTML="";
		m.setAttribute("style","");
	});
	
});