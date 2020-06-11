// An AndStatement will only come back true if both sides are true

// let result = true && true // return true
// let result = false && true // return false
// let result = true && false // return false
// let result = false && false // return false
// console.log(result);

// example

let hour = 12;
let min = 15;

if (hour == 12 && min == 15) {
    console.log("The time is 12:15! Time for your appointment")
} else {
    console.log("It's not time for your appointment yet...");
} // Output: The time is 12:15! Time for your appointment

// Q1 Create a variable called openTime an another variable called closeTime which represent the opening and closing time of the resturant
// create another variable called currentTime. Use an And statement to determine if the resturant is closed

let openTime = 17;
let closeTime = 22;
let currentTime = 20;

if (currentTime < closeTime && currentTime > openTime) {
    console.log("The resturant is open");
} else {
    console.log("The resturant is closed")
} // Output: The resturant is open

let openTime2 = 17;
let closeTime2 = 22;
let currentTime2 = 11;

if (currentTime2 < closeTime2 && currentTime2 > openTime2) {
    console.log("The resturant is open");
} else {
    console.log("The resturant is closed")
} // Output: The resturant is closed

// Q2 add a value that the resturant is closed if its a Monday

let openTime3 = 17;
let closeTime3 = 22;
let currentTime3 = 20;
let isMonday = false;

if (currentTime3 < closeTime3 && currentTime3 > openTime3 && !isMonday) {
    console.log("The resturant is open");
} else {
    console.log("The resturant is closed")
} // Output: The resturant is open

let openTime4 = 17;
let closeTime4 = 22;
let currentTime4 = 20;
let isMonday2 = true;

if (currentTime4 < closeTime4 && currentTime4 > openTime4 && !isMonday2) {
    console.log("The resturant is open");
} else {
    console.log("The resturant is closed")
} // Output: The resturant is closed

// And statements will output the first falsy statement

let firstName = "Luke";
let lastName = "Parker";
let nickName = "Lukey";

let userName = firstName && lastName && nickName && null
console.log(userName); // Output: "null"

let firstName2 = "Luke";
let lastName2 = "Parker";
let nickName2 = "Lukey";

let userName2 = firstName2 && lastName2 && nickName2 && "Anonymous" && "Default"
console.log(userName2); // Output: Default

