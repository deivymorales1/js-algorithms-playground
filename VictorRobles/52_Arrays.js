/*
Dado un array de arrays, unir todos los arrays en uno solo sin usar la
funcion o concat de JavaScript solo con estructuras de control y 
funciones basicas de arrays.

Ejemplos:
const numeros = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

limpiarNumeros(numeros)

Devuelve:
[1,2,3,4,5,6,7,8,9]

*/

const numeros = [
  [1,2,3],
  [4,5,6],
  [7,8,9, 'F']
];

function limpiarNumeros(n){
  let newArray = []
  for(let i = 0; i < n.length; i++){
    newArray.push(...n[i])
  }

  let cleanedArray = newArray.filter(item => typeof item === 'number');
  return cleanedArray
}

console.log(limpiarNumeros(numeros));
