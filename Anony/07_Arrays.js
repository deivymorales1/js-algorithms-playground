/*
Convertir un array de objetos en un objeto con propiedades

const array = [
  {id: 1, name: "Alice"},
  {id: 2, name: "Bob"},
  {id: 3, name: "Charlie"}
];

const obj = array.reduce((result, item) =>{
  result[item.id] = item.name;
  return result;
}, {});
console.log(obj);
*/