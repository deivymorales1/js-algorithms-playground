// Array de numeros multiplicados por dos.

/*
Tienes un array de numeros, tu reto es retornar los números de ese array multiplicados por dos.
*/

const arr = function (args) {
  return args.map((arg) => arg * 2);
};
console.log(arr([1, 2, 3, 4, 5]));
