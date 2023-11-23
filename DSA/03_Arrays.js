// Remove Duplicates from Sorted Array

//Queremos mostrar por consola cuantas veces hay elementos repetidos en un array dado:

var removeDuplicates = function (nums) {
  // Primero debo sacar la lista limpia sin numeros repetidos y
  // volverlo array

  let p1 = 1;
  let p2 = 1;
  for (p1; p1 < nums.length; p1++) {
    if (nums[p1] !== nums[p1 - 1]) {
      nums[p2] = nums[p1];
      p2++;
    }
  }
  return p2;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
