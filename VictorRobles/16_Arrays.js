/*
Crea una funcion que meta en una caja de asteriscos la frase que le pasemos por parametro

Ejemplos: 
mostrarTextoCaja('Hola soy Víctor Robles WEB');
**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********
*/

function mostrarTextoCaja(palabra) {
  // Separamos la frase en palabras
  let texto = palabra.split(" ");
  console.log(texto);
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    resultado += ast;
    resultado += "* " + texto[i] + " *" + "\n";
    resultado += ast;
  }
  return resultado;
}

console.log(mostrarTextoCaja("Hola soy Víctor Robles WEB"));
