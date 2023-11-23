// Retornar en un array solo nombres del objeto.

/*
Tienes un array de objetos que representan datos de personas con los siguientes atributos:

Name.
LastName.
Age.
El reto es retornar los nombres del array en un array diferente.

*/

const personas = [
  {
    name: "Nicolas",
    lastName: "Molina",
    age: 28,
  },
  {
    name: "Valentina",
    lastName: "Valiente",
    age: 19,
  },
];

let nombresArray = [];
for (let i = 0; i < personas.length; i++) {
  const nombre = personas[i].name;
  nombresArray.push(nombre);
}
console.log(nombresArray); // [Nicolas, Valentina]
