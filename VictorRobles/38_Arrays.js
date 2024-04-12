/*
Crea una funcion que convierta un numero a binario.
aBinario(10); // 1010
aBinario(76); // 1001100 
*/

function aBinario(number){
  let resto = '';
  let entero = number;

  if (entero === 0) {
    return '0'; // Si el número es 0, el binario también es 0
  }

  while(entero > 0){
    resto = (entero % 2 ) + resto;
    entero = Math.floor(entero / 2);
  }

  return resto
}

console.log(aBinario(76));
