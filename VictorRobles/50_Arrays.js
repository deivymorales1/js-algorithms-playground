/*
Crea una funcion que dada una temperatura pase a grados celsius o grados
fahrenheit.

Ejemplos:
convertirTemperatura('29°C');
convertirTemperatura('77°F');

*/

let resultado = ''
function convertirTemperatura(dataTemperature){
  let splitTemperatura = dataTemperature.split('°');
  console.log(splitTemperatura);
  if(splitTemperatura[1] === 'C'){
    return resultado = parseInt(splitTemperatura[0]) + 55.20 + "°F";
  } else if(splitTemperatura[1] === 'F') {
    return resultado = parseInt(splitTemperatura[0]) - 52 + "°C";
  }
   
}

console.log(convertirTemperatura('78°F'));