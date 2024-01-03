// Dado un array y un arrays de superhéroes de Marvel, haz un programa que puedamostrar la información de un superheroe. Y añade una capacidad de buscar la información de varios superhéroes a la vez.

// Esto es un objeto con objetos por dentro:

const infoSuperheroes = {
  "Iron Man": {
    nombreReal: "Tony Stark",
    poderes: ["Tecnologia avanzada", "Movilidad aérea"],
    equipo: "Los vengadores",
  },
  "Capitán América": {
    nombreReal: "Steve Rogers",
    poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
    equipo: "Los vengadores",
  },
  Thor: {
    nombreReal: "Thor Odinson",
    poderes: ["Mjolnir", "Viento y trueno"],
    equipo: "Los vengadores",
  },
  "Spider-Man": {
    nombreReal: "Peter Parker",
    poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
    equipo: "Los vengadores",
  },
  Hulk: {
    nombreReal: "Bruce Banner",
    poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
    equipo: "Los vengadores",
  },
};

// Creamos la primera funcion:

function mostrarInformacionSuperHeroe(aka) {
  //Comprobar si existe
  if (aka in infoSuperheroes) {
    // Consigo la info
    const info = infoSuperheroes[aka];
    console.log(`####### ${aka} #######`);
    console.log(`Nombre Real: ${info.nombreReal}`);
    console.log(`Poderes: ${info.poderes.join("-")}`);
    console.log(`Equipo: ${info.equipo}`);
    console.log(`##############`);
  } else {
    console.log(`${aka} no existe en los datos que tengo`);
  }
}
mostrarInformacionSuperHeroe("Spider-Man");

// Creamos la segunda function

const mostrarInformacionSuperheroes = (akas) => {
  // Recorrer todos los nombres
  akas.forEach((aka) => {
    // Mostrar la info
    mostrarInformacionSuperHeroe(aka);
  });
};
mostrarInformacionSuperheroes(["Iron Man", "Thor"]);
