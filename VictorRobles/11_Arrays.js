/*
Crea una funcion a la cual le pase un array de numeros y un numero que sera el resultado de la suma de dos de los valores
*/

function sumarDos(array, target) {
  let numSet = new Set(array);
  for (let i = 0; i < array.length; i++) {
    // Calculo, para sacar el segundo numero para devolver
    let compl = target - array[i];
    
    if (numSet.has(compl) && compl !== array[i]) {
      return [array[i], compl];
    }
  }
  return "No se encontraron dos numeros que sumen al objetivo";
}

console.log(sumarDos([4, 5, 9, 1], 10)); // [3,7]
