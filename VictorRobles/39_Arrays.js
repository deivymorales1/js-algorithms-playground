/*
Dado un numero crea una funcion que genere todas las combinaciones
de parentesis validas.

Ejemplos: 
combinacionesParentesis(3);

Devuelve:
[
  "((()))",
  "(()())",
  "()(())",
  "()()()"
]
*/

function generarCombinaciones(n) {

  const resultado = [];

  if(n < 1) return resultado;
  
  // Función recursiva para generar las combinaciones
  function generarCombinacionesRecursivas(s, abierto, cerrado) {
    // Caso base: si ya hemos agregado todos los pares de paréntesis
    if (s.length === 2 * n) {
      resultado.push(s);
      return;
    }

    // Si todavía hay paréntesis abiertos disponibles, podemos agregar uno
    if (abierto < n) {
      generarCombinacionesRecursivas(s + "(", abierto + 1, cerrado);
    }

    // Si hay más paréntesis cerrados que abiertos, podemos agregar uno cerrando un paréntesis
    if (cerrado < abierto) {
      generarCombinacionesRecursivas(s + ")", abierto, cerrado + 1);
    }
  }

  // Llamar a la función recursiva para generar las combinaciones
  generarCombinacionesRecursivas("", 0, 0);

  return resultado;
}

// Ejemplo de uso:
const number = 3; // Cambia este número según la cantidad de pares de paréntesis que desees
const combinaciones = generarCombinaciones(number);
console.log(combinaciones);


