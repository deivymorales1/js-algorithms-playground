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

function generarMatriz(numero) {
  // Crear un array vacio
  let newMat = [];
  // Variable acumuladora
  let numAct = 1;

  // Bucle para generar las filas
  for (let fila = 0; fila < numero; fila++) {
    // Crear una nueva fila con un push
    newMat.push([]);
    // Bucle para genera cada numero de la matriz
    for (let columna = 0; columna < numero; columna++) {
      // Agregar numero a la fila actual
      newMat[fila].push(numAct++);
    }
  }
  return newMat;
}

console.log(generarMatriz(3));
