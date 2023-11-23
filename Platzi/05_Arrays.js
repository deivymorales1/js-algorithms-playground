// Filtrar ordenes de compra con dos condiciones

/*
Tienes un array de objetos que representan ordenes de compra con los siguientes atributos:
customerName
total
delivered
Tu reto es filtrar todas las ordenes de compra que cumplan con la condición de tener un total mayor o igual a 110, y ademas que el estado delivered sea true.
*/


const orders = [
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 300,
    delivered: true,
  },
];

let res = [];
for (let i = 0; i < orders.length; i++) {
  if (orders[i].total > 110 && orders[i].delivered == true) {
    res.push(orders[i]);
  } else {
    console.log("No cumple");
  }
}
console.log(res);