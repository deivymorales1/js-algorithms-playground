/*
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).

Utiliza el método de entrada de datos habitual de tu lenguaje, en el caso de JS, usaremos la función prompt.

juegoDelAhorcado('victor');
*/
/*

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Ejercicio </h1>
  <h2>Introduce la letra</h2>
  <button id="lanzarJuego">Empezar a jugar</button>
  <script src="pruebas.js" defer> </script>
</body>
</html>
*/

function juegoDelAhorcado(palabraSecreta) {
  // Crear  variable palabra oculta con guiones bajos
  let palabraOculta = "_".repeat(palabraSecreta.length);
  // Variable con el numero de intentos
  let intentos = 5;
  // Bucle mientras quedan intentos
  while (intentos > 0 && palabraOculta !== palabraSecreta) {
    // Pedimos una letra
    let letra = prompt("Adivina una letra");
    // Comprobar si la letra esta en la palabra para actualizar
    // la variable palabra oculta
    if (palabraSecreta.includes(letra)) {
      // actualizar la variable palabra oculta
      // y meter la letra en la posicion correcta
      for (
        let contadorLetras = 0;
        contadorLetras < palabraSecreta.length;
        contadorLetras++
      ) {
        if (letra === palabraSecreta[contadorLetras]) {
          //Convertir la palabraOculta en un array
          let palabraOcultaArray = Array.from(palabraOculta);
          // Seleccionar su indice y cambiar _ por la letra adivinada
          palabraOcultaArray[contadorLetras] = letra;
          // Unir el array en un string de nuevo
          // y actualizar la variable palabraOculta
          palabraOculta = palabraOcultaArray.join("");
        }
      }
    } else {
      // Si no existe la letra en la  palabra entonces resto un intento
      intentos--;
    }

    // Mostrar el estado actuall de la palabra oculta
    console.log(`La palabra es: ${palabraOculta}`);
    // Mostrar cuantos intentos quedan
    console.log(`Te quedan: ${intentos} intentos`);
  }

  // Cuando salga del bucle
  // Si me han adivinado todas las letras mostrar mensaje de victoria
  if (palabraOculta === palabraSecreta) {
    console.log(`En hora buena,has ganado! ${palabraSecreta}`);
  } else {
    console.log(
      `Lo siento, has perdido. La palabra secreta era: ${palabraSecreta}`
    );
  }
}

const lanzarJuego = document.querySelector("#lanzarJuego");

lanzarJuego.addEventListener("click", () => juegoDelAhorcado("Deivy"));
