/*
Dado un conjunto de enteros distintos, devuelve todos los
subconjuntos posibles.

Ejemplos:
subconjuntos([1,2,3]);

Devuelve:
[
   [1], [2], [3], [1,2,3], [1,2], [1,3], [2,1], [2,3], [3,1], [3,3], []
]

*/



function subconjuntos(subC){
  // Inicializa con un conjunto vacio como el conjunto inicial
  let res = [[]];

  // Recorrer el array
  for(let i = 0; i < subC.length; i++){
    // Calcular tamano de la lista de subconjuntos
    const tamano = res.length;

    // Iterar subconjunto actual
    for(let j = 0; j < tamano; j++){
      // Anadir al res una copia del subconjunto actual
      // con el actual agregado
      res.push([...res[j], subC[i]])
    }
    
  }

  return res
  
}

console.log(subconjuntos([1,2,3]));


