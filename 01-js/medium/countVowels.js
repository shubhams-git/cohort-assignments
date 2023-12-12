/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  let strToArray = str.toLowerCase().split("");
  for (let i = 0; i < strToArray.length; i++) {
    if (
      strToArray[i] === "a" ||
      strToArray[i] === "e" ||
      strToArray[i] === "i" ||
      strToArray[i] === "o" ||
      strToArray[i] === "u"
    ) {
      count++;
      console.log(strToArray[i]);
      console.log(count);
    }
  }
  return count;
}

module.exports = countVowels;