/*
Dado un texto, crea una funcion que sea capaz de generar un nuevo texto
que incluya solo las palabras de 4 caracteres o mas.

Ejemplos:
fraseFiltrada("Hola soy Victor Robles, hoy hace frio")
*/

function fraseFiltrada(phrase){
  // Convertimos string a array
  let words = phrase.split(" ")
  // Filtramos el array devolvemos resultado
  return words.filter((word) => word.length >= 4).join(" ");

}

console.log(fraseFiltrada("Hola soy Deivy Rocha, hoy hace frio"));
