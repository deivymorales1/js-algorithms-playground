/*
Crea una funcion para encontrar la longitud del mayor subconjunto
de caracteres que no se repiten.

Ejemplos:
encontrarSubcadenasSinRepetir('abcabcbb') // abc, 3
encontrarSubcadenasSinRepetir('bbbbb'); // b , 1
encontrarSubcadenasSinRepetir('pwwkew'); // wke , 3
*/


function encontrarSubcadenasSinRepetir(n){
  let subcadenaSinRepetir = '';
  let subcadenaActual = '';
  // Recorro cada caracter de n
  for(let letra of n){
    // Si el caracter ya esta en la subcadena actual, la reiniciamos
    if(subcadenaActual.indexOf(letra) !== -1) subcadenaActual = '';

    // Anadir el caracter a la subcadena actual
    subcadenaActual += letra;

    // Comprobar longitu de subcadena

    if(subcadenaActual.length > subcadenaSinRepetir.length) {
      subcadenaSinRepetir = subcadenaActual;
    }
  }
  console.log(subcadenaSinRepetir, subcadenaSinRepetir.length);
  return subcadenaSinRepetir, subcadenaSinRepetir.length;
}

console.log(encontrarSubcadenasSinRepetir('pwwkew'));