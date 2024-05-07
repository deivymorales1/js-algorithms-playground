/*
Crea una funcion a la que le pasemos una nota y nos de una
calificacion:

0-3: Deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente

Ejemplos: 
calificar(8.2) // Notable

*/

let calificacion = {
  '0-3': 'Deficiente',
  '3-5': 'Insuficiente',
  '5-6': 'Suficiente',
  '6-7': 'Bien',
  '7-9': 'Notable',
  '9-10': 'Sobresaliente'
}

function calificar(nota){

  // Obtenemos las claves de califacion y buscamos si la nota esta en el rango de calificaciones
  const rango = Object.keys(calificacion).find(rango => {
    // Dividimos la clave del objeto
    const [min, max] = rango.split('-').map(Number);
    return nota >= min && nota <= max;
  });
  // Se devuelve el valor asociado a la clave si rango es true.
  return rango ? calificacion[rango] : 'La calificacion no coincide';

  
} 

console.log(calificar(3.2));

