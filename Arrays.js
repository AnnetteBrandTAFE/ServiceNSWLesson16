// example
let names = ["Luke", "Charlotte", "Clayton", "Samantha"]

// to access an array you name the array and then the index. Please note the numbers start at 0
console.log(names[2]); // Output: Clayton

// you can output the entire array by
console.log(names); // Output: [ 'Luke', 'Charlotte', 'Clayton', 'Samantha' ]

// you can update the element at an index by the following
names[2] = "Thomas";
console.log(names); // Output: [ 'Luke', 'Charlotte', 'Thomas', 'Samantha' ]

// to add an element to an array at the end
names.push("Riley");
console.log(names); // Output : [ 'Luke', 'Charlotte', 'Thomas', 'Samantha', 'Riley' ]

// to remove the last element of the array
names.pop();
console.log(names); // Output : [ 'Luke', 'Charlotte', 'Thomas', 'Samantha' ]

// to add an element to the start of the array
names.unshift("Dan");
console.log(names); // Output : [ 'Dan', 'Luke', 'Charlotte', 'Thomas', 'Samantha' ]

// To remove an element from the start of the array
names.shift();
console.log(names); // Output : [ 'Luke', 'Charlotte', 'Thomas', 'Samantha' ]

// To create a new empty array
let myNumbers = new Array();
console.log(myNumbers) // Output: []

// You can also add a number and it will create that number empty elements

let myNumbers1 = new Array(5);
console.log(myNumbers1) // Output: [ <5 empty items> ]

// Q1 Create an array of numbers. There should be at least 5 elements

let numbers = [1, 2, 3, 4, 5, 6, 7];

// Q2 - Add a number to the end of the number array

numbers.push(8);
console.log(numbers); // Output: [  1, 2, 3, 4, 5, 6, 7, 8]

// Q3 - Add a number to the front of the number array

numbers.unshift(0);
console.log(numbers); // Output: [ 0, 1, 2, 3, 4, 5, 6, 7, 8]

// Q4 - Change the value of the last element in the array to another number

numbers[8] = 80;
console.log(numbers); // Output: [ 0, 1, 2,  3, 4, 5, 6, 7, 80]

// Q5 - Remove the last element of the array

numbers.pop();
console.log(numbers); // Output: [ 0, 1, 2,  3, 4, 5, 6, 7]

// Q6 - Remove the first 2 elements of the array

numbers.shift();
numbers.shift();
console.log(numbers); // Output: [ 2, 3, 4, 5, 6, 7 ]

// Q7 - Create an array of strings.

strings = ["Helena", "Rosemary", "Annette", "Mary", "Evie"];
console.log(strings); // Output: [ 'Helena', 'Rosemary', 'Annette', 'Mary', 'Evie' ]

// Q8 - Update the second element in the array to be a new string.

strings[2] = "Nettie";
console.log(strings); // Output: [ 'Helena', 'Rosemary', 'Nettie', 'Mary', 'Evie' ]

