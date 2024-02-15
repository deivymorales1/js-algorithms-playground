/*
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH

*/

function invertirTexto(texto) {
  // Crear cadena
  let invertido = "";
  
  // Iterar el texto
  for (let letra = texto.length - 1; letra >= 0; letra--) {
    invertido += texto[letra];
  }
  return invertido;
}

console.log(invertirTexto("deivy"));
