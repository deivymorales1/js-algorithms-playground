/*
Busqueda de patron en una cadena

Para buscar un patron en una cadena de texto,  puedes utilizar los metodos test() y exec().

const regex = '/patron';
const texto = "Texto de ejemplo";
const resultado = regex.test(texto);
console.log(resultado)  // false 

Metodo exec devuelve un array con la informacion de la coincidencia o null si no hay evidencia.

const regex = /patrón/;
const texto = "Texto de ejemplo";
const resultado = regex.exec(texto);
console.log(resultado); // null

Busqueda de patrones con modificadores

const regex = /patrón/g;
const texto = "Texto de ejemplo";
const resultado = texto.match(regex);
console.log(resultado); // null

Busqueda insensible a mayusculas y minusculas

const regex = /patrón/i;
const texto = "Texto de ejemplo";
const resultado = regex.test(texto);
console.log(resultado); // false



*/