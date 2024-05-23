/*
Crea una funcion a la cual le pase un string y lo convierta a un listado 
en un objeto que cuenta el numero de elementos.

Las palabras no deben incluir guiones ni guiones bajos.

Ejemplos: 

contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs
ordenador")

Devuelve:
{
  pc: 1,
  ordenador: 2,
  computadora: 1,
  consola: 1,
  ps5: 1,
  theLastOfUs: 1
}
*/


function contarElementos(phrase) {
  count = {};
  // Limpiar el string
  phrase = phrase.replaceAll(/[-_]/g, "").split(" ");

  // Iteramos sobre el string
  for (let word of phrase) {
    // Modificamos la variable contador
    count[word] = (count[word] || 0) + 1;
  }
  return count;
}

console.log(
  contarElementos(
    "pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"
  )
);


