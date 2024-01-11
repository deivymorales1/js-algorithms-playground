/*
Dado un array de frases, contar el numero de palabras que tiene

Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
Devuelve: 12
*/

function contarPalabras(frase) {
  // Recoger la frase y convertirla en texto
  let combinedString = frase.join(" ");
  // Dividir la frase en palabras
  let copiaArray = combinedString.split(/[ ,]+/);
  let count = 0;
  // Hacer un bucle para recorrer las palabras
  copiaArray.forEach((item) => {
    count += 1;
  });
  return count;
}

console.log(
  "El total de palabras es:",
  contarPalabras([
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy amante desarrollador web back end",
  ])
);
