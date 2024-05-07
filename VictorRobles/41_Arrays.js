/*
Crea una funcion que invierta los numeros de un numero entero

Ejemplos: 
invertirEntero(123) // 321
invertirEntero(-123) // -321
*/

function invertirEntero(entero){
  // Convertir a cadena y remover el signo - si existe
  let newEntero = Math.abs(entero).toString();
  // Invertir cadena
  newEntero = newEntero.split("").reverse().join("")
  // Convertir de nuevo a numero y restaurar el signo -
  return newEntero = entero < 0 ? "-" + newEntero : newEntero;

}

console.log(invertirEntero(-123));


