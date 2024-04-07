/*
Optimizar el gasto en mi gasolinera favorita
Tienes dos opciones:
- Gasolina individual: Cuesta 10 euros por cada llenado de tanque
- Tarjeta de socio: Cuesta 90 euros anuales, pero cada vez que llenas el
tanque te cuesta 8.2 euros el tanque y pagas solo el 78% del precio del
llenado del tanque.

Cada vez que llenas el tanque, se paga el 78% del precio del llenado
que pagaste la ultima vez hasta llegar a un descuento maximo del 50%;

Hacer una funcion que, al pasarle las veces que voy a llenar el tanque, me diga 
si vale la pena comprar la tarjeta de socio o no.

Ejemplos: 
debeSerSocio(15);

Devulve:
como usuario casual te sale a: 150
Como socio te sale a: 154.684
No te sale a cuenta ser socio 
 */

function debeSerSocio(num) {
  // Calcular el llenado del individuo
  let resultNormal = num * 10;

  // Calcular el llenado del socio

  let tarjSoc = 90;
  let precSoc = 8.2;
  let descSoc = 0.78;
  let descMax = 0.5;
  let resultSocio = tarjSoc;
  for (let i = 1; i <= num; i++) {
    // Calcular descuento
    descSoc = descSoc ** i; // elevar a x veces

    // Bloquear descuento a maximo del 50%
    if (descSoc <= descMax) {
      descSoc = 0.5;
    }

    // Actualizar la variable llenado de socio y sumarle valores
    resultSocio += precSoc * descSoc;
  }

  console.log("Como usuario normal te sale a: " + resultNormal);
  console.log("Como socio te sale a : " + parseFloat(resultSocio.toFixed(2)));
  if (resultNormal < resultSocio) {
    return "No vale la pena ser socio";
  } else {
    return "Vale la pena ser socio";
  }
}

console.log(debeSerSocio(50));
