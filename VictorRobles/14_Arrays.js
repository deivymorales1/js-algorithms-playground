/*
Dada una cadena de texto, comprobar si es palindromo o no. No usar funciones de javascript, solo estructuras de control

Los palindromos son palabras que se leen igual a un estando invertidas.
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
*/

// Capturamos el valor del texto
let texto = "otto";
// Aplicamos los metodos al texto
let text = texto
  .toLowerCase()
  .replace(/[^\w\s]/gi, "")
  .split("")
  .reverse()
  .join("");

if (text === texto) {
  console.log("Is palindrome");
} else {
  console.log("Not is palindrome");
}

function isPalindrome(palabra) {
  // Dividir la cadena  en un array de letras
  let letras = [];
  for (let i = 0; i < palabra.length; i++) {
    letras.push(palabra[i]);
  }
  // Invertir en array con un bucle
  let letrasInvertidas = [];
  for (let i = letras.length - 1; i >= 0; i--) {
    letrasInvertidas.push(letras[i]);
  }
  // Unir todas las letras del array con un bucle y guardando resultado en una variable
  let palabraInvertida = "";
  for (let i = 0; i < letrasInvertidas.length; i++) {
    palabraInvertida += letrasInvertidas[i];
  }
  // Devolver resultado
  return palabra === palabraInvertida;
}

console.log(isPalindrome("ana"));
