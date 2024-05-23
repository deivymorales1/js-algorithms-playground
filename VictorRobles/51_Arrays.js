/*
Crea una funcion que dibuje un diamante de asteriscos.

Ejemplos:
generarDiamantes(5);
  *
 *** 
*****
 *** 
  *  
*/


function generarDiamantes(n) {
  // verificar si el numberDiamonds es par
  if(n % 2 === 0) n-- ;

  let mitad = Math.floor(n / 2);

  for(let filaActual = 0; filaActual < n; filaActual++){
    let fila = '';
    // Calculaar el numero de espacios
    const espacios = Math.abs(mitad - filaActual);
    
    // Imprimir espacios
    for(let espacioActual = 0; espacioActual < espacios; espacioActual++){
      fila += ' ';
    }

    // Imprimir asteriscos
    for(let asteriscoActual = 0; asteriscoActual < n - (espacios * 2); asteriscoActual++){
      fila += "*";
    }

    console.log(fila);

  }
 
}

generarDiamantes(5)