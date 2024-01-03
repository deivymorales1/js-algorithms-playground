/*
Crea una funcion que reciba un DNI (8 numeros) y calcule la letra del DNI

Es un proceso matematico facil que se basa en obtener el resto de la division entera del numero del DNI y el numero 23.

Y con el resto se obtiene la letra, usandoloo como posicion o indice dentro de un array de letras.
*/

function generarLetraDNI(dni) {
  // Definir el array de letras de DNI
  const letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];
  // Convertir cadena a numero
  let dniNumber = parseInt(dni);
  let divisor = 23;
  if (dniNumber > 0 && dniNumber < 99999999) {
    // Calcular el resto
    let resto = dniNumber % divisor;
    // Encontrar la letra en el array basandonos en el numero del resto
    let letra = letras[resto];
    // Devolver el dni completo
    let resultado = dniNumber + letra;
    return resultado;
  } else {
    return "Dni incorrecto";
  }
}

console.log(generarLetraDNI("21439143"));
