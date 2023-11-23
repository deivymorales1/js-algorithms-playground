// Filtar y devolver un array con solo palabras que tengan 4 letras

/*
Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan la condicion de tener 4 o mas letras.
*/

const numbers = function (args) {
  return args.filter((word) => word.length > 4);
};
console.log(numbers(["amorios", "gracias", "leandro", "niño", "ola"]));
