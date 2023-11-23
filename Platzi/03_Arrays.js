// Agregar y calcular una nueva propiedad taxes.

/*
Tienes un array de objetos que representa los datos de productos con los siguientes atributos:
name
price
stock
Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero.

*/

const products = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
  },
];

for (let i = 0; i < products.length; i++) {
  let val = products[i].price;
  let tax = (19 * val) / 100;
  products[i].taxes = tax;
}

console.log(products[1]);
