//Second Largest Number

//Nos devuelve el segundo valor mas grande de la matriz:
function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a, b) => {
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}

console.log(secondLargest([12, 35, 39, 12, 36, 1]));