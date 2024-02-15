/*
Crea una función que ordene un array de objetos en base a las propiedades
que le pase por parametro.
  

*/
const usuarios = [
  { nombre: "Antonio", edad: 20 },
  { nombre: "Juan", edad: 23 },
  { nombre: "Pepe", edad: 12 },
  { nombre: "Raul", edad: 28 },
  { nombre: "Paco", edad: 38 },
  { nombre: "Jason", edad: 56 },
];

function ordenarObjetos(usuarios, param) {
  const comparador = (a, b) =>
    a[param] < b[param] ? -1 : a[param] > b[param] ? 1 : 0;
  return usuarios.sort(comparador);

}


console.log(ordenarObjetos(usuarios, "nombre"));
