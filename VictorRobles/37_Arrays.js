/*
Crea dos funciones que comprueben si dado un array de numeros, todos 
ellos son pares.

Una funcion usando metodos del lenguaje y otra solo usando estructuras
de control.

Ejemplos:
todosPares([1,2,3,4]); // false
todosPares([2,6,8,12]); // true

*/

function todosPares(numbers){
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0) return false 
  }
  return true
} 
 

function todosPares(numbers){
  return numbers.every(number => number % 2 === 0);
} 

console.log(todosPares([2,1,4]));

