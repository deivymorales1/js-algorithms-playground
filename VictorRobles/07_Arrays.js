/*
Dada un array de enteros, detectar si esa lista de numeros es una permutacion del 1 al ultimo numero del array.

En este caso una permutacion es una secuencia de numeros en orden sin que falle ninguno entre ellos  devolver el numero faltante mas grande

El array puede venir desordenado
*/

function permutacion(numeros) {
  // Ordenar el array de numeros
  numeros.sort((menor, mayor) => menor - mayor);
  // Pila de numeros faltantes
  let numerosFaltantes = [];

  // Recorrer el array y comprobar si cada elementos es igual a siguiente numero mas uno
  for (let i = 0; i < numeros.length; i++) {
    let numeroFalta = numeros[i] + 1;

    if (numeros[i + 1] !== numeroFalta) {
      numerosFaltantes.push(numeroFalta);
    }
  }
  // Limpiar el ultimo elemento insertado artificialmente
  numerosFaltantes.pop();
  // Si todo es correcto devolver el ultimo numero
  let resultado = numeros[numeros.length - 1];

  if (numerosFaltantes.length >= 1) {
    resultado = numerosFaltantes[numerosFaltantes.length - 1];
  }
  return resultado;
}

console.log(`El numero mas grande es:`, permutacion([1, 2, 3, 4, 5]));
