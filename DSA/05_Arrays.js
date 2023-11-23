// Two Sum

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to __target__.
You may assume that each input would have exactly  one solution, and you may not use the same element twice.
You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1]→9, we return [0, 1].
*/

function twoSum(nums, target) {
  let numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    let complemento = target - nums[i];

    if (numIndices.hasOwnProperty(complemento)) {
      return [numIndices[complemento], i];
    }

    numIndices[nums[i]] = i;
  }
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target)); // Salida: [0,1]
