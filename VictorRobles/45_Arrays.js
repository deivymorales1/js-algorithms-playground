/*
Dado un array de numeros, elimina los numeros duplicados.

Ejemplos: 
eliminarDuplicados([1,1,2,2,3,4,5,5,5,6])
*/

function eliminarDuplicados(numbers){
  // Ordenar el array
  numbers = numbers.sort()
  let newNumbers = []

  // Recorrer el array
  for(let i = 0; i < numbers.length; i++){
    // Verifico si el elemento ya existe en el nuevo array
    if(!newNumbers.includes(numbers[i])){
      newNumbers.push(numbers[i]);
    }
  }
  return newNumbers.sort((a , b) => a - b)
}

console.log(eliminarDuplicados([1,1,2,2,3,4,5,5,5,6,9,9,9,10,12,7,6]));