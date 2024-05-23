/*
Crea una funcion que tome un array de objetos de peliculas y una 
clave como parametros y devuelva un objeto donde cada valor de la
clave es un array con todos los objetos que tienen ese valor para la 
clave especificada.



*/



const peliculas = [
  {titulo: 'et', anio: 1982},
  {titulo: 'regreso al futuro', anio: 1985},
  {titulo: 'cazafantasmas', anio: 1984},
  {titulo: 'dirty dancing', anio: 1987},
  {titulo: 'terminator 2', anio: 1991},
  {titulo: 'parque jurasico', anio: 1993},
  {titulo: 'forrest gump', anio: 1994},
]



function agruparPor(array, clave){
  return array.reduce((resultado, item) => {
    const key = item[clave];
    if(!resultado[key]) {
      resultado[key] = [];
    }
    resultado[key].push(item);
    return resultado
  }, {})
  


  
} 

console.log(agruparPor(peliculas, 'anio'));