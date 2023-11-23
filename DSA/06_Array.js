// Container With Most Water

/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the i_th line are (i,0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Constraints: 
n == height.length 
2 <= n <= 105 
0 <= height[i] <= 104 
*/

function maxArea(heigth) {
  // Declaramos las variables punteros de ambos extremos
  let i = 0;
  let j = heigth.length - 1;

  let max_area = 0;

  while (i < j) {
    // Determina la altura minima entre los dos punteros
    let min_height = Math.min(heigth[i], heigth[j]);

    //Calcula el area usando la altura minima y la
    max_area = Math.max(max_area, min_height * (j - i));

    // Mueve el puntero que apunta a la altura mas pequeña
    if (heigth[i] < heigth[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max_area;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
