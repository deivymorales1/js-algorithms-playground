/*
Crea una funcion a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y 
minusculas.

Ejemplo: 
buscarPalabra('Hola como estas', 'Hola') // Devuelve: true

*/

function searchWord(phrase, word) {
  // Convertir la frase en minusculas
  let text = phrase.toLowerCase();
  let pal = word.toLowerCase();

  // Dividir la palabra en cadenas
  let words = text.split(" ");
  console.log(words);
  return words.includes(pal);
}

console.log(searchWord("Hola como estas", "Hoadfa1la"));
