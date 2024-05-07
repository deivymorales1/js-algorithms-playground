/*
Crea un simulador de piedra, papel o tijera.

El resultado podra ser: "Jugador 1", "Jugador 2" o "Empate".

Ejemplos: 
quienGana([['PIEDRA','TIJERA'], ['TIJERA','PIEDRA'], ['PAPEL','TIJERA']]);
// Devuelve Jugador 2

quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]]); 
// Devuelve: "Empate"
 
quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]); 
// Devuelve "Jugador 1"
*/



function quienGana(arrayJugadas){
  let contador = {
    'jugador1': 0,
    'jugador2': 0,
    'empate': 0,
  }

  let pesos = {
    'PIEDRA' : 1,
    'PAPEL' : 2,
    'TIJERA' : 3,
  }

  // Recorremos el array
  for(const [opcion1, opcion2] of arrayJugadas){
    
    // Reasignar valores
    const pesoOpcion1 = pesos[opcion1];
    const pesoOpcion2 = pesos[opcion2];

    // Comparar igualdad
    if(pesoOpcion1 === pesoOpcion2){
      contador.empate += 1;
      console.log(contador.empate);
    } else if((pesoOpcion1 === 1 && pesoOpcion2 === 3) || 
               (pesoOpcion1 === 2 && pesoOpcion2 === 1) ||
               (pesoOpcion1 === 3 && pesoOpcion2 === 2)) {
                contador.jugador1 += 1;
                console.log(contador.jugador1);
    }else{
      contador.jugador2 += 1;
    }
  }

  // Iteramos sobre las claves del objeto
  let maxValor = -Infinity;
  let maxClave = null;

  for(const clave in contador){
    if(contador[clave] > maxValor){
      maxValor = contador[clave]
      maxClave = clave
    }
  }
  return maxClave
  

}

console.log(quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PAPEL"], ["PAPEL", "PIEDRA"]]))


