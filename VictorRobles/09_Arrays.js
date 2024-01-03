/* Crea una funcion que reciba un array de numeros y calcule
la suma de todos los numeros pares del array
*/

function sumarPares(arrayNumber) {
  let divisor = 2;
  let sumaPares = 0;
  // Recorre el array
  for (i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % divisor == 0) {
      sumaPares += arrayNumber[i];
    }
  }
  return sumaPares;
}
console.log(sumarPares([2, 13, 10, 8, 15]));
