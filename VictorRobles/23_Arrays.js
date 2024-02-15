/*
Crea una funcion que a la cual le pase unos numeros en un array y me decodifique el mensaje teniendo en cuenta que cada letra tiene un numero asignado

Las letras del abecedario de la A al aZ tienen un numero 
por ejemplo la A es el numero 1 y la Z es el numero 26

Ejemplos: 
decodificarMensaje([8,15,12,1]);

Devuelve:
HOLA
*/

let abecedario = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function decodificarMensaje(abecedario, mensajeOculto) {
  let mensajeDecodificado = "";
  // Recorro cada numero del array
  for (let i = 0; i < mensajeOculto.length; i++) {
    for (let j = 0; j < abecedario.length; j++) {
      // Comparamos el valor de nuestro numero con un valor en el array
      if (mensajeOculto[i] == j + 1) {
        mensajeDecodificado += abecedario[j] ;
      }
    }
  }
  return mensajeDecodificado;
}

console.log(decodificarMensaje(abecedario, [4,5,9,22,25]));
