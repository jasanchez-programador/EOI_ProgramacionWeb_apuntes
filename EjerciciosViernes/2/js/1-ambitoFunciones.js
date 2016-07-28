// los tipos de datos Primitivos se pasan por COPIA

function f(n1){
	n1 = n1 + 1; // n1 como parametro por COPIA
	n2 = n1 + 1; // n2 como variable GLOBAL
	var n3 = n1 + 1 // n3 como variable LOCAL // SHADOW de n3
	console.log("****");
	console.log("CLOUSURE");
	console.log("n1: " + n1); // 11
	console.log("n2: " + n2); // 12
	console.log("n3: " + n3); // 12

	// EJEMPLO DE ELEVACION --> da igual donde definas la variable,
	// js la mueve al inicio de la funcion
	// asi estos 2 codigos son iguales:

	// codigo1
	// console.log("n4: " + n4) // devuelve UNDEFINED
	// var n4 = n1
	// console.log("n4: " + n4) // devuelve 12

	// codigo2
	// var n4;
	// console.log("n4: " + n4) // devuelve UNDEFINED
	// n4 = n1
	// console.log("n4: " + n4) // devuelve 12

}

var n1 = 10;
var n2 = 10;
var n3 = 10;
console.log("GLOBAL");
console.log("n1: " + n1); // 10
console.log("n2: " + n2); // 10
console.log("n3: " + n3); // 10
f(n1);
console.log("****");
console.log("GLOBAL");
console.log("n1: " + n1); // 10
console.log("n2: " + n2); // 12
console.log("n3: " + n3); // 10
