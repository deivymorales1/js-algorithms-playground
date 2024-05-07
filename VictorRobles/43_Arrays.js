/*
Dada una coleccion de letras:
[
  ['A','B','C','D'],
  ['Z','V','K','S'],
  ['F','G','O','E']
]

Crea una funcion que me diga si la palabra que le paso como parametro
se puede formar con las letras de la coleccion

Ejemplos: 
puedeFormarPalabra('PERRO', coleccion); // false
puedeFormarPalabra('CASO', coleccion); // true

*/


let coleccion = [
  ['A','B','C','D'],
  ['Z','V','K','S'],
  ['F','G','O','E']
]

function puedeFormarPalabra(word, arrayM){
  //let dfafa = arrayM.flat() // Con esto aplanamos el array
  
  // Recorro la palabra
  word = word.toUpperCase();
  for(let i = 0; i < word.length; i++){
    let letraEncontrada = false;
    // Recorro la matriz
    for(let fila of arrayM){
      if(fila.includes(word[i])){
        letraEncontrada = true;
        break; // Salir del bucle si la letra está presente
      } 
    }
    // Si la letra no se encontro en ninguna filaa
    if(!letraEncontrada){
      return false;
    }
  }
  // Si todas las letras se encuentran en la matriz
  return true;
}


console.log(puedeFormarPalabra('dedo', coleccion));
