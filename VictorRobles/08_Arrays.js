/*
Crea un algoritmos al cual pase un numero entero y me lo convierta a numero romano.

enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV

*/

const ROMANOS = Object.freeze({
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
});

function convertirANumerosRomanos(numero) {
  let resultado = "";
  for (let clave in ROMANOS) {
    let equivalente = ROMANOS[clave];
    while (numero >= equivalente) {
      resultado += clave;
      numero -= equivalente;
    }
  }
  return resultado;
}

let numero = 900;
console.log(convertirANumerosRomanos(numero));
