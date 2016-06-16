// los objetos se pasan por REFERENCIA

function f(p1){
	p1.x = p1.x + 1; 		// p1 como parametro por VALOR
	p2.x = p1.x + 1; 		// p2 como objeto GLOBAL
	//var p3.x = p1.x + 1;  // p3 como objeto LOCAL que NO existe DA ERROR
	console.log("****");
	console.log("CLOUSURE");
	console.log("p1: " + p1.x); // 11 
	console.log("p2: " + p2.x); // 12
	// console.log("p3: " + p3.x); // 10
}

var p1 = {
	x: 10
};
var p2 = {
	x: 10
};
// var p3 = {
// 	x: 10
// };
console.log("GLOBAL");
console.log("p1: " + p1.x); // 10
console.log("p2: " + p2.x); // 10
// console.log("p3: " + p3.x); // 10
f(p1);
console.log("****");
console.log("GLOBAL");
console.log("p1: " + p1.x); // 11
console.log("p2: " + p2.x); // 12
// console.log("p3: " + p3.x); // 10