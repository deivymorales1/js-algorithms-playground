/*

En la pelicula de Avatar, existen diferentes tribus de Na'vi que habitan
Pandora. Cada tribu tiene una habilidad especial y un valor de 1 y 5:

Tribus pacificas: Omaticaya (1), Tawkami (2), Kekunan (3)
Tribus guerreras: Rda (2), Hometree (3), Toruk Makto (5)

Crea un programa que calcule el resultado de una guerra entre dos
ejercitos de Na'vi

Ejemplos: 
calcularResultadoGuerra(tribusPacificas, tribusGuerreras);

Devuelve: 
"Gana el mal!"

*/

const tribusPacificas = [
  { 
    nombre: 
    { 
      valor: 1,
      nombre: 'Omaticaya'
    },
    cantidad: 10
  },
  {
    nombre:
    {
      valor: 2,
      nombre: 'Tawkami'
    },
    cantidad: 5
  },
  {
    nombre:
    {
      valor: 3,
      nombre: 'Kekunan'
    },
    cantidad: 3
  }
]

const tribusGuerreras = [
  {
    nombre: 
    {
      valor: 2,
      nombre: 'Rda'
    },
    cantidad: 10
  },
  {
    nombre: 
    {
      valor: 2,
      nombre: 'Hometree'
    },
    cantidad: 5
  },
  {
    nombre:
    {
      valor: 3,
      nombre: 'Toruk Makto'
    },
    cantidad: 1
  }
];



function calcularResultadoGuerra(buenos, malos){
  // Variables de almacenamiento 
  let resultBuenos = 0;
  let resultMalos = 0;

  // Recorrer el array
  for(let item of buenos){
    // Ahora multiplico el valor por la cantidad para todos los items
    resultBuenos += item.nombre.valor * item.cantidad;
  }
  for(let item of malos){
    resultMalos += item.nombre.valor * item.cantidad;
  }

  // Valido el resultado mayor
  if(resultBuenos > resultMalos) {
    console.log('Gana el bien');
  } else {
    console.log('Gana el mal');
  }
}



console.log(calcularResultadoGuerra(tribusPacificas, tribusGuerreras));