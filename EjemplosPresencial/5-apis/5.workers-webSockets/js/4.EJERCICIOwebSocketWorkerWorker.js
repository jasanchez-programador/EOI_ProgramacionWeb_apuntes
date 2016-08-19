// utilizamos el servidor websocket 3.WebSockets_servidor creado en el ejercicio anterior

var clienteWS = new WebSocket("ws://localhost:8080/");

clienteWS.onopen = function(){
	//console.log("Soy: " + clienteWS.url);
	self.onmessage = function(sms){
		// console.log("click");
		// var sms = $('#saludo').val();
		clienteWS.send(sms.data);
	};
	clienteWS.onmessage = function(s){
		// var valAnt = $('#respuesta').val();
		// var valNuevo = valAnt +"\n"+s.data;
		// $('#respuesta').val(valNuevo);
		self.postMessage(s.data);
	}
}

clienteWS.onclose = function(err){
	alert("Conexión Cerrada desde servidor: "+ err.code +"--"+ err.message);
}