/*
Dado un texto, crea una funcion que sea capaz de invertir el orden sus 
palabras.

No podemos usar funciones nativas del lenguaje.

Ejemplos: 
invertirPalabras("Hola soy Victor Robles");  // Devuelve Robles Victor 
soy Hola
*/

function invertirPalabras(word) {
  //
  word = word.split(" ");
  let result = "";
  for (let i = word.length - 1; i >= 0; i--) {
    result += word[i] + " ";
  }
  return result
}

console.log(invertirPalabras("Hola soy Deivy Rocha"));
