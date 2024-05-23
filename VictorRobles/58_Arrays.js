/*
Crea una funcion que tome una cadena de caracteres como argumento
y devuelva una nueva cadena que contenga unicamente las letras unicas de
la cadena original.

Las letras deben aparecer en el mismo orden en que se encontraron en
la cadena original.


Ejemplos: 
letrasUnicas('Hola soy Victor Robles WEB');

Devuelve:
Hola syVictrRbeWEB

*/

function letrasUnicas(frase){
  // Declarar variables 
  let letrasUnicas = ''

  // Recorro cada letra
  for(let letra of frase){
    // Verifico si ya existe en un array.
    if(!letrasUnicas.includes(letra)){
      letrasUnicas += letra
    }
  }

  return letrasUnicas

}

console.log(letrasUnicas('Hola soy Victor Robles WEB'));