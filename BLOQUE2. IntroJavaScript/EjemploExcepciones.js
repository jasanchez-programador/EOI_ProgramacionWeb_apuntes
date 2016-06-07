var Nombre = "julio";
try {
	console.log("mi nombre es " + nombre)
}
catch(e){
	console.log("ERROR: " + e.code + " -- " + e.name + " -- " + e.message)
}
finally{
	console.log("Siempre me ejecuto");
	//throw new Exception();
}