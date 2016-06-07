console.log('inicio');
setInterval(function(){
	console.log("hola desde interval")
},1000)
setTimeout(function(){
	console.log("hola desde timeOut")
},3000)
/*
inicio
3 hola desde interval
hola desde timeOut
32 hola desde interval
*/

var fechaActual = new Date();
// fecha de hoy
console.log(new Date())
console.log(new Date(2016,12,07))

var fecha = new Date().split('\s');
console.log("fecha: " + fecha);