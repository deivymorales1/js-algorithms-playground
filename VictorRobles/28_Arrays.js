/*
Crea una funcion que me diga si un numero es armstrong o no.

Un numero es armstrong si la suma de los cubos de sus digitos es igual
al numero.

Por ejemplo, el numero 371 es armstrong por que 3***3 + 7***3 + 1***3 = 371

Si la cifgra es de 4 digitos, se eleva a 4, y si es de 5 a 5.

Ejemplos:
esArmstrong(371); // Devuelve: true
*/

function esArmstrong(num) {
  // Convertir a cadena para saber la longitud del numero
  let numsString = num.toString();
  numsString = numsString.split("");
  console.log(numsString);
  let sum = 0;
  // Itero el bucle
  numsString.forEach((digit) => {
    sum += parseInt(digit * digit * digit);
  });
  return sum === num;
}

console.log(esArmstrong(371));
