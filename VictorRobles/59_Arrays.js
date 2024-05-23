/*
Crea una funcion que retorne el numero total de bumeranes de un array de
numeros enteros e imprima cada uno de ellos.

Un bumeran (bumeran, boomerang) es una secuencia formada por 3 numeros
seguidos, en el que el primero y el ultimo son iguales, y el segundo es
diferente.

Por ejemplo: [2, 1, 2].

Ejemplos:
contarBumeranes([2,1,2,3,3,4,2,4])

Devuelve:
Hay 2 bumeranes: [[2,1,2], [4,2,4]]

*/

function contarBumeranes(numbers){
  let contador = 0
  let bumeranes = [] 
  for(let i = 0; i < numbers.length - 2; i++){
    
    const primerNumero = numbers[i];
    const segundonumero = numbers[i+1];
    const tercerNumero = numbers[i+2];

    if(primerNumero === tercerNumero && primerNumero !== segundonumero) {
      contador++;
      bumeranes.push([primerNumero, segundonumero, tercerNumero])
    }

  }

  return [contador, bumeranes];

}

let bum = contarBumeranes([2,1,2,3,3,4,2,4]);
console.log('Hay', bum[0] , 'bumeranes: ' , bum[1])



/*   // Iterar a través del array
  for (let i = 0; i < numbers.length - 2; i++) {
    // Verificar si la subsecuencia actual es un bumerán
    if (numbers[i] === numbers[i + 2] && numbers[i] !== numbers[i + 1]) {
      // Añadir el bumerán al array de resultados
      bumeranes.push([numbers[i], numbers[i + 1], numbers[i + 2]]);
    }
  }
 */