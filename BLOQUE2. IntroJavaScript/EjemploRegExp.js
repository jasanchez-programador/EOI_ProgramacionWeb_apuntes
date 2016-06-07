var cadena ="hola 1234 mundo mundial";

console.log(cadena.search(/[0-9]+\s\w/));
console.log(cadena.match(/[0-9]+\s\w/));
console.log(cadena.match(/[0-9]+\s\w/)[0]);
/*
5
["1234 m", index: 5, input: "hola 1234 mundo mundial"]
1234 m
*/
var RE = /[0-9]+\s\w/;
console.log(RE.test(cadena));
console.log(RE.exec(cadena));
console.log(RE.exec(cadena)[0]);
/*
true
["1234 m", index: 5, input: "hola 1234 mundo mundial"]
1234 m
*/