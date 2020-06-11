// Q1 Declare an empty array using the new Array syntax

let myArray = new Array();

// Q2 Push 3 string values to the array

myArray.push("Revising", "Arrays", "Today");
console.log(myArray); // Output: [ 'Revising', 'Arrays', 'Today' ]

// Q3 Log all the string values in reverse order (last element logged first, etc.)

for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);
}
// Output:
// Today
// Arrays
// Revising

// Q4 Create an array of numbers. There should be at least 4 elements in the array

let numArray = [9, 5, 12, 21, 37, 42, 70];

// Q5 Add a new element at the start and end of the array

numArray.unshift(0);
numArray.push(80);
console.log(numArray); // Output: [ 0,  9,  5, 12, 21, 37, 42, 70, 80 ]

// Q6 Log all the elements with an even index

for (i = 0; i <= numArray.length - 1; i += 2) {
    console.log(numArray[i]);

}
// Output:
// 0
// 5
// 21
// 42

// Q7 Log all the elements that are divisible by 2 (use a for..of loop)

for (let element of numArray) {
    if (element % 2 == 1) {
        continue;
    }
    console.log(element);
}
// Output:
// 0
// 12
// 42
// 70
// 80

// Q8 Create a new array and fill it with all the elements that are greater than or equal to 10

let numArray2 = new Array();

for (let element of numArray) {
    if (element <= 10) {
        continue;
    }
    numArray2.push(element)
}
console.log(numArray2); // Output: [ 12, 21, 37, 42, 70, 80 ]




