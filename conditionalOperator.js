// example for a if statement

// let age = 15
// let canDrink;
// if(age >= 18) {
//     canDrink = "Yes";
// } else {
//     canDrink = "No";
// }
// console.log(canDrink); // Output: No

// example of a Conditional/Ternary Operator for the above if statement

// let age = 15 // Output: No
// let age = 18 // Output: Yes
// let canDrink = (age >=18) ? "Yes" : "No";
// console.log(canDrink); 

// Q1 Set the value of a car based on its color. If it is red then it is worth 5000, otherwise it is worth 10000

let carColour = "Red"; 
let carValue = (carColour == "Red") ? 5000 : 10000;
console.log(carValue); // Output: 5000

let carColour2 = "Black";
let carValue2 = (carColour2 == "Red") ? 5000 : 10000;
console.log(carValue2); // Output: 10000

// Q2 Set the value of a message based on someone's name. 
// If they have your name set the message to be "Hello Me", otherwise set the message to be "Hello + name"

let name = "Annette"; 
let message = (name == "Annette") ? "Hello Me" : `Hello ${name}`;
console.log(message); // Output: Hello Me 

let name2 = "Dan"; 
let message2 = (name2 == "Annette") ? "Hello Me" : `Hello ${name2}`;
console.log(message2); // Output: Hello Dan

