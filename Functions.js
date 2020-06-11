//Example

// function multiply(num1, num2) {
//     return num1 * num2;
// }
// let result = multiply(12, 8);
// let twoByEight = multiply(2, 8);
// console.log(result); // Output: 96
// console.log(twoByEight); // Output: 16

// // returns arnt required however the output will not be able to be used again
// function multiple(num1, num2) {
//     console.log(num1 * num2);
// }
// multiple(12, 8); // Output: 96
// multiple(2, 8); // Output: 16

// Q1 Create a function that takes in a name and writes "Hello" and then the person's name to the console.

function helloName(name) {
    console.log("Hello" + " " + name)
}
helloName("Annette"); // Output: Hello Annette

//2 Create a function that takes in a name and returns a string with the value "Hello" and then the person's name

function hiName(name) {
    return `Hello ${name}`;
}
let answer = hiName("Annette");
console.log(answer); // Output Hello Annette

let secondName = hiName("Daniel");
console.log(secondName); // Output: Hello Daniel

console.log(`${answer} & ${secondName}`); // Output: Hello Annette & Hello Daniel

//Q3 Create a function that takes in 2 numbers and logs the largest of those numbers to the console

function largerNumber(num1, num2) {
    if (num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

largerNumber(10, 100);
largerNumber(1001, 1000);

//Q4 Create a function that takes in 2 numbers and returns the smallest of those numbers

function smallestNumber(num1, num2) {
    if (num1 < num2) {
        return num1
    }
    return num2
}

let smallerNumber = smallestNumber(10, 100);
console.log(smallerNumber); // Output: 10

let smallNumber = smallestNumber(-10, 100);
console.log(smallNumber); // Output: -10

// default paramaters
// if you don't pass in a second value it will use the default as per below
// example
// function multiply(num1, num2 = 5) {
//     return num1 * num2;
// }
// let result = multiply(12);
// let twoByEight = multiply(12, 2);
// console.log(result); // Output: 60
// console.log(twoByEight); // Output: 24

// Q5 Update Q1 so that the name defaults to your name

function heyName(name = "Nettie") {
    console.log("Hello" + " " + name)
}
heyName("Annette"); // Output: Hello Annette
heyName(); // Output: Hello Nettie

// Q6 Update Q2 so that the name defaults to Luke

function lukeName(name = "Luke") {
    return `Hello ${name}`;
}
let newName = lukeName("Annette");
console.log(newName); // Output Hello Annette

let newName2 = lukeName();
console.log(newName2); // Output: Hello Luke

// Q7 Update Q3 so that the second parameter defaults to 100

function largerNumber2(num1, num2 = 100) {
    if (num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

largerNumber2(10); // Output: 100
largerNumber2(10, 90); // Output: 90

// Q8 Update Q4 so that both parameters default to 5

function smallestNumber2(num1 = 5, num2 = 5) {
    if (num1 < num2) {
        return num1
    }
    return num2
}

let newNumber1 = smallestNumber2();
console.log(newNumber1); // Output: 5

let newNumber2 = smallestNumber2(10);
console.log(newNumber2); // Output: 5

let newNumber3 = smallestNumber2(2.5);
console.log(newNumber3); // Output: 2.5
