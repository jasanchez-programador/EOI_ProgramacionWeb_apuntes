var cadena ="hola 1234 mundo mundial";

var RE1 = /[0-9]+\s\w/;
console.log(cadena.search(RE1)); // posicion de inicio o -1
console.log(cadena.match(RE1));
console.log(cadena.match(RE1)[0]); // la ocurrencia o null
/*
5
["1234 m", index: 5, input: "hola 1234 mundo mundial"]
1234 m
*/
var RE2 = /[0-9]+\s\w/;
console.log(RE2.test(cadena)); // true si esta
console.log(RE2.exec(cadena));
console.log(RE2.exec(cadena)[0]); // la ocurrencia o nulo
/*
true
["1234 m", index: 5, input: "hola 1234 mundo mundial"]
1234 m
*/