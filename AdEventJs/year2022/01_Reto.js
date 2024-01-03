/*
Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

*/

//const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */

/*

Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.
Nota: El carácter \n representa un salto de línea.

¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

*/

function wrapping(gifts) {
  // recibe regalos
  let wrapped = []; // variable para almacenar cada regalo envuelto
  //envolver cada regalo para esto se crea un for of

  for (let i = 0; i < gifts.length; i++) {
    console.log(gifts[i]);
    let papel = "";
    // tenemos que medir cuanto mide cada regalo
    let car = gifts[i].length;
    console.log(car);
    // ahora reemplazamos los caracteres de la longitud del regalos por *
    papel = "*".repeat(car) + "**";
    // ahora envolvemos el regalos
    console.log(papel);
    let regalo = `${papel}\n*${gifts[i]}*\n${papel}`;
    console.log(regalo);
    // ahora lo empujamos
    wrapped.push(regalo);
  }
  return wrapped;
}

let gifts = ["Bicicleta", "Munyeca", "Barco"];

const salida = wrapping(gifts);
console.log(salida);
