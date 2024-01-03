/*
Crea un programa que cuente las palabras de un texto
Ejemplos:
contarPalabras("El perro de san roque no tiene el rabo 
porque es un perro muy muy malo");

Devuelve:
{
  el: 2,
  perro: 2,
  de: 1,
  san: 1,
  roque: 1,
  no: 1,
  tiene: 1,
  rabo: 1,
  porque: 1,
  es: 1,
  un: 1,
  muy: 2,
  malo: 1
}
*/

function contarPalabras(texto) {
  let contadorPalabras = {};
  // Dividir el texto en palabras
  let palabras = texto
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .split(" ");
  console.log(palabras);
  // Recorrer el array de texto
  for (i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    // Comprobar si la palabra ya esta en el contadorPalabras
    if (contadorPalabras.hasOwnProperty(palabra)) {
      // Incrementar frecuencia si palabra ya existe
      contadorPalabras[palabra]++;
    } else {
      contadorPalabras[palabra] = 1;
    }
  }
  return contadorPalabras;
}

console.log(
  contarPalabras(
    "El perro de san roque no tiene el rabo por que es un perro muy muy malo"
  )
);
