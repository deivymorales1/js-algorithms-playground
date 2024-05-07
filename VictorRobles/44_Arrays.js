/*
Crea una funcion que detecte si un string es un pangrama o no.

Un pangrama es una frase que incluye todas las letras del abecedario.

Ejemplos: 
esPangrama("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja."); // true
esPangrama("Hola soy deivy rocha"); // false

*/

let abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function esPangrama(frase, arrayAbecedario){
  // convertir frase en minusculas
  frase = frase.replace(/[ ,.]/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  let letrasbuscadas = []
  
  // Recorro cada letra de la frase
  for(let letra of frase){
    // Inserto cada letra en un nuevo array
    letrasbuscadas.push(letra)
  }
  
  // Elimino elementos duplicados del array
  letrasbuscadas = new Set(letrasbuscadas);

  // Ordeno el array
  letrasbuscadas = [...letrasbuscadas].sort()

  // Convierto ambas matrices a objetos JSON para poderlos comparar.
  const result = JSON.stringify(letrasbuscadas) === JSON.stringify(arrayAbecedario) ? true : false;
  return result
  
}

console.log(esPangrama('El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja', abecedario));