/*
Dado una año actual, crea un programa que muestre los años bisiestos que habra en los proximos 30 años

*/

const yearCurrent = new Date();

let limite = 30;
let año = yearCurrent.getFullYear();

// Bucle para recorrer los años
while (año < yearCurrent.getFullYear() + limite) {
  if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    console.log(`El año ${año} es bisiesto`);
  } else {
    console.log("No es bisiesto");
  }
  año++;
}
