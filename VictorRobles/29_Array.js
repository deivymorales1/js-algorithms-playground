/*
dado un array de objetos de peliculas de los anios 80 y 90

Crea dos funciones:
- Una que filtre por genero y otra que filtre por la decada de este formato
80s o 90s

Array de objetos a utilizar:
const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
];

Ejemplos: 
filtradoPorGenero(peliculas, "accion");
filtradoPorDecada(peliculas, "80s");

*/
const peliculas = [
  { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
  { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
  { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
  { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
  { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
  { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
  {
    titulo: "Starship Troopers",
    genero: "ciencia ficción",
    anioLanzamiento: 1997,
  },
  {
    titulo: "The Fifth Element",
    genero: "ciencia ficción",
    anioLanzamiento: 1997,
  },
  { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
  { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 },
];

function filtradoPorGenero(peliculas, genre) {
  // Convertimos el genero en minusculas
  genre = genre.toLowerCase();
  // Filtramos en el objeto y retornamos
  return peliculas.filter((pelicula) => pelicula.genero == "accion");
}

console.log(filtradoPorGenero(peliculas, "accion"));

function filtradoPorDecada(pelicules, year) {
  // Filtramos por anio 80
  if (year == "80s") {
    return pelicules.filter(
      (pelicula) =>
        pelicula.anioLanzamiento >= 1979 && pelicula.anioLanzamiento <= 1989
    );
  }

  // Filtramos por anio 90
  if (year == "90s") {
    return pelicules.filter(
      (pelicula) =>
        pelicula.anioLanzamiento >= 1990 && pelicula.anioLanzamiento < 2000
    );
  }
}

console.log(filtradoPorDecada(peliculas, "90s"));
