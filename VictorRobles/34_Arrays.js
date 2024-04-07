/*
Crea una funcion a la cula le pase un array y me devuelva
un objeto con los elementos agrupados

Ejemplos:
agrupar([7.2, 5.3, 7.4], Math.floor)
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }

*/

function agrupar(data) {
  // Almacenamiento
  let count = {};

  // Evaluamos el tipo de dato
  if (typeof data[0] === "number") {
    for (let num of data) {
      // Convertir a entero
      let entero = Math.floor(num);
      count[entero] = count[entero] || [];
      count[entero].push(num);
    }
  } else if (typeof data[0] === "string") {
    for (let word of data) {
      let chars = word.length;
      count[chars] = count[chars] || [];
      count[chars].push(word);
    }
  } else if(typeof data[0] === 'object'){
    for (let datos of data) {
      let age = datos.edad;
      count[age] = count[age] || [];
      count[age].push(datos);
    }
  }
  return count;
}

console.log(agrupar([7.2, 5.3, 7.4]));

console.log(agrupar(["uno", "dos", "tres", "cuatro"]));

console.log(
  agrupar([
    { nombre: "victor", edad: 33 },
    { nombre: "paco", edad: 44 },
  ])
);
