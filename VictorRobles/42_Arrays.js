/*
Dado un objeto de superheroes, crear una funcion que sea capaz de 
ordenarlos por su nombre real o por su nombre de superheroe.

*/

let informacionSuperheroes = {
  "Superman": {
    "nombreReal": "Clark Kent",
    "afiliacion": "DC Comics",
    "poderes": ["vuelo", "super fuerza", "super velocidad", "rayos x"]
  },
  "Spider-Man": {
    "nombreReal" : "Peter Parker",
    "afiliacion" : "Marvel Comics", 
    "poderes" : ["telaranas", "agilidad", "sensores aracnidos" ]
  }, 
  "Batman": {
    "nombreReal": "Bruce Wayne",
    "afiliacion": "DC Comics",
    "poderes": ["inteligencia", "habilidades fisicas sobresalientes", "ricos recursos"]
  },
  "Wonder Man": {
    "nombreReal": "Diana Prince",
    "afiliacion": "DC Comics",
    "poderes": ["super fuerza", "vuelo", "resistencia sobrenatural"]
  },
  "Thor": {
    "nombreReal": "Thor Odinson",
    "afiliacion": "Marvel Comics",
    "poderes": ["martillo magico", "vuelo", "trovador"],
  },
  "The Flash": {
    "nombreReal": "Barry Allen",
    "afiliacion": "DC Comics",
    "poderes": ["super velocidad", "manipulacion del tiempo"]
  },
  "Captain America": {
    "nombreReal": "Steve Rogers",
    "afiliacion": "Marvel Comics",
    "poderes": ["super fuerza", "agilidad", "resistencia sobrenatural", "escudo indestructible"],
  },
  "Green Latern": {
    "nombreReal" : "Hal Jordan",
    "afiliacion": "DC Comics",
    "poderes" : ["anillo magico", "manipulacion de la energia"]
  },
  "Hulk": {
    "nombreReal": "Bruce Banner",
    "afiliacion": "Marvel Comics",
    "poderes": ["superfuerza", "resistencia sobrenatura", "transformacion en Hulk"]
  }
}



function ordenarSuperHeroes(propiedad) {
  // Convertimos el objeto a un array de pares [nombre, información]
  let personajes = [];

  for(const nombreSuperheroe in informacionSuperheroes){
    const info = informacionSuperheroes[nombreSuperheroe];

    personajes.push({
      nombre: nombreSuperheroe,
      nombreReal: info.nombreReal,
      poderes:info.poderes,
    });
  }

 {
  personajes.sort((a,b) => {
    if(a[propiedad] < b[propiedad]) return -1;
    if(a[propiedad] > b[propiedad]) return 1;
    return 0;
  });
  
  return personajes; 

}
}

console.log(ordenarSuperHeroes("nombreReal"));




