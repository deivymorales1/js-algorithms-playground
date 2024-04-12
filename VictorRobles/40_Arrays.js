/*

Crea una funcion que convierta un numero romano a un decimal.

Ejemplos: 
romanoAEntero("XVIII"); // 18
romanoAEntero("CXX"); // 120
*/

function romanoAEntero(romano){

  // Crear objeto con numeros romanos y sus correspondientes valores numericos

  let objRom = Object.freeze( {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  });

  let entero = 0;

  // Recorremos el objeto
  for(let i = 0; i < romano.length; i++){
    let valueCurrent = objRom[romano[i]];
    //Comparar si valor actual es menor que el siguiente
    let valueNext = objRom[romano[i+ 1]];

    if(valueNext && valueNext > valueCurrent){
      entero += valueNext - valueCurrent;
      i++;
    } else {
      entero += valueCurrent;
    }
  }

  return entero;

}

console.log(romanoAEntero("CXX"));



