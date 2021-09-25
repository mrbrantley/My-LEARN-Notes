// Consider the variable:
var groceryList = ["chips", "dip", "cookies"];

// 1. Write the code that will add "soda" to the end of the original array.

groceryList.push("soda");
console.log(groceryList);

// 2. Write the code that will add "granola" to the end of array without altering the original array.

console.log(groceryList.concat("granola"));

// 3. Write the code that will return a subset of the array containing only "chips" and "dip".

console.log(groceryList.slice(0, 2));

// 4. Write the code that will add "beans" to the "chips" and "dip" array.

var lastList = groceryList.slice(0, 2);
lastList.push("beans");
console.log(lastList);

// Consider the variable:
var numbers = [2, 4, 6, 8, 10];

// 5. Write the code that will add the number 0 to the beginning of the array.

numbers.unshift(0);
console.log(numbers);

// 6. Write the code that will add the number 12 to the end of the array.

numbers.push(12);
console.log(numbers);

// 7. Write the code that will remove the first number from the array.

numbers.shift();
console.log(numbers);

// 8. Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

var newNumbers = [0];
console.log(newNumbers.concat(numbers));

// Consider the variable:
var numSet = [2, 13, 6, 8, 4, 2];

// 9. Write the code that finds the index of the first appearance of the number 2.

console.log(numSet.indexOf(2));

// 10. Write the code that finds the index of the last appearance of the number 2.

console.log(numSet.lastIndexOf(2));

// 11. Write the code that returns the number at the third index.

console.log(numSet[2]);

// Consider the variable:
var characters = ["y", "a", "r", "r", "a"];

// 12. Write the code that brings all the letters in the characters array together into a string.

console.log(characters.join(""));

// 13. Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

var charsReversed = characters.reverse();
console.log(charsReversed);

// 14. Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

console.log(charsReversed.join("*"));

// 15. Write the code that brings all the letters in the charsReversed array together into a string without separators.

console.log(charsReversed.join(""));

// Create two arrays consisting of three first names of your cohort members in each.
var members1 = ["Lillian", "Rebecca", "Cianna"]
var members2 = ["Kevin", "Brandon", "Phil"]

// 16. Write the code that sorts the names in alphabetical order.

console.log(members1.sort());
console.log(members2.sort());

// 17. Write the code that sorts the names in reverse alphabetical order.

console.log(members1.sort().reverse());
console.log(members2.sort().reverse());

// 18. Write the code that sorts all the names in alphabetical order in a single array.

console.log(members1.concat(members2).sort());

// Consider the variables:
var numbersArr = [42, 221, 71, 7, 18, 87];
var oddIndexes = [];

// 19. Write the code that logs the values from the numbers array that are at odd indexes.

for(let i=0; i<numbersArr.length; i++){
  if(i % 2 !== 0){
    console.log(numbersArr[i])
  }
};

// 20. Write the code that adds the values from odd indexes into the oddIndexes array.

for(let i=0; i<numbersArr.length; i++){
  if(i % 2 !== 0){
    oddIndexes.push(numbersArr[i])
  }
};
console.log(oddIndexes)