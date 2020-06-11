// example of how to loop through an array
let numbers = [12, 19, 57, 84, 24];

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(number);
}
// Output: 
// 12
// 19
// 57
// 84
// 24

// Q1 create an array of strings

girlNames = ["Helena", "Rosemary", "Annette", "Mary", "Evie"];

// Q2 Loop over the array of strings and log each one to the console

for (let i = 0; i >= girlNames.length; i++) {
    let familyNames = girlNames[i]
    console.log(familyNames);
}
// Output:
// Helena
// Rosemary
// Annette
// Mary
// Evie

// Q3 Create an array of numbers

let numArray = [1, 2, 3, 4, 5, 6]

// Q4 Loop over the array of numbers and log the number times 2 for each element in the array

for (let i = 0; i < numArray.length; i++) {
    let arrayTimes = numArray[i];
    console.log(arrayTimes * 2);
}
// Output:
// 2
// 4
// 6
// 8
// 10
// 12

// For Of Loops
// this is the same as a for loop you just don't have access it i
// example
let nums = [1, 2, 3, 4, 5, 6]

for (let number of nums) { // how to write this: for (let {this can be anything e.g. element} of {name of Array})
    console.log(number);
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6

// Q5 Loop over an array of strings and log each one to the console using a for..of loop

let string = ['One', "Two", "Three", "Four", "five"];

for (let element of string){
    console.log(element);
}
// Output: 
// One
// Two
// Three
// Four
// five

// Q6 Loop over an array of numbers and log the number times by 2 for each element in the array using a for..of loop

let newArray = [1,2,3,4,5];

for(let element of newArray) {
    console.log(element * 2);
}
// Output: 
// 2
// 4
// 6
// 8
// 10