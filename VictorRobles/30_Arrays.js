/*
Dado un array de numeros, permitir los numeros duplicados un maximo de 2
veces y devolver la longitud del array

Ejemplos:
eliminarDuplicados([4,4,4,2,2,3]); //5
eliminarDuplicados([6,6,2,2,2,3]); // 5
eliminarDuplicados([1,2,3,4,9,9,9,9]); // 5

*/

function eliminarDuplicados(arrayNum) {
  
  // Variables de almacenamiento
  let count = {};
  let result = [];

  // Iteramos sobre el array
  for(let num of arrayNum) {
    // Evaluamos cada numero e incrementamos el contador
    count[num] = (count[num] || 0) + 1;

    // Si ya existe evaluo que no sea mayor a 2 veces, si cumple pusheo
    if(count[num] <=2){
      result.push(num);
    }
  }
  return result.length

}

console.log(eliminarDuplicados([4,4,4,2,2,3]));



