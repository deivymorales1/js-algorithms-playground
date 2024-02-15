// Valid Palindrome

/*
An integer is a palindrome when it reads the same forward and backward

*/

const isPalindrome = function(x) {
  return x >= 0 && x.toString() === x.toString().split("").reverse().join("");
}
const res = isPalindrome(232);
console.log(res); 