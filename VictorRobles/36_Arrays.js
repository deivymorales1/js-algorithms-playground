/*
Crea un programa que encuentre las parejas de numeros que como resultado
dan un numero que pasamos a la funcion por parametro:

Ejemplos: 
encontrarParejasConSuma([1,2,3,4],5);
*/

function encontrarParejasConSuma(arrayNumbers, numberSolitare){
  let result = []
  // Recorro el array con for
  for(let i = 0; i  < arrayNumbers.length; i++ ){
    for(let j = i + 1; j < arrayNumbers.length; j++){
      let sum = arrayNumbers[i] + arrayNumbers[j]
      if(sum === numberSolitare){
        result.push([arrayNumbers[i], arrayNumbers[j]])
      }
    }
  }
  return result
}

console.log(encontrarParejasConSuma([1,2,3,4],5));

