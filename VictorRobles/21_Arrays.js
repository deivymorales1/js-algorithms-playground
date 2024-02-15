/*
Crea una matriz que reciba un numero y me genere una matriz con el numero de columnas y filas que le hemos indicado por parametro

Ejemplos: 
generaMatriz(4)

Devuelve: [
  [1,2,3,4],
  [1,2,3,4],
  [9,10,11,12],
  [13,14,15,16]
]

*/

function random(numero) {
  let newMat = [];
  const mul = numero * numero;

  // Recorro el array general
  for (let i = 0; i < numero; i++) {
    newMat.push([]);
    // Recorro el array por el valor original
    for (let j = 0; j < numero; j++) {
      newMat[i].push(Math.floor(Math.random() * mul) + 1);
    }
  }
  console.log(newMat);
}

random(4);
