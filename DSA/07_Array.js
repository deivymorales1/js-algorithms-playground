// Best Time to Buy and Sell Stock

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock choosing a differente day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1: 

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2: 
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

function maxProfit(precios) {
  let menor = Number.POSITIVE_INFINITY;
  let gananciaMaxima = 0;

  for (let i = 0; i < precios.length; i++) {
    if (precios[i] < menor) {
      menor = precios[i]; // Actualizar el precio más bajo encontrado hasta ahora
    } else {
      // Si encontramos un precio más alto que el menor actual,
      // calculamos la ganancia y la comparamos con la ganancia máxima encontrada hasta ahora
      gananciaMaxima = Math.max(gananciaMaxima, precios[i] - menor);
    }
  }

  return gananciaMaxima;
}

// Ejemplo de uso
const precios = [7, 2, 1, 1, 1];
console.log(maxProfit(precios)); // Debería imprimir 5, porque 6 - 1 = 5
