// OrStatement if either side it true it will evaluate as true.
// below are all the results that will resolve as true

// let result = false || true;
// let result = true || true;
// let result = false || true;
// let result = false || false;

// these are normally used within if statements to combine multiple variables as in the example below
// example of an OrStatement

// let isInClass = false;
// let isAtWork = false;
// let isParent = true;

// if (isInClass || isAtWork || isParent) {
//     console.log("Sorry, I'm busy");
// } else {
//     console.log("I'm FREE!!!");
// } // Output: Sorry, I'm busy

// Q1 Declare a variable age and variable isDriving. 
// Use an or statement to determine if the person is allowed to drink

let age = 23;
let isDriving = false;

if (age < 18 || isDriving) {
    console.log("No drinks for you")
} else {
    console.log("Have fun, but please drink sensibly");
} // Output: Have fun, but please drink sensibly

let age2 = 15;
let isDriving2 = false;

if (age2 < 18 || isDriving2) {
    console.log("No drinks for you")
} else {
    console.log("Have fun, but please drink sensibly");
} // Output: No drinks for you

let age3 = 80;
let isDriving3 = true;

if (age3 < 18 || isDriving3) {
    console.log("No drinks for you")
} else {
    console.log("Have fun, but please drink sensibly");
} // Output: No drinks for you

// Q2 Add another variable that represents a reason you would not be allowed to drink
// Add it to the OR Statement you created in Q1 to determine if a person is allowed to drink

let age4 = 23;
let isDriving4 = false;
let isPregant4 = true;

if (age4 < 18 || isDriving4 || isPregant4) {
    console.log("No drinks for you")
} else {
    console.log("Have fun, but please drink sensibly");
} // Output: No drinks for you

let age5 = 23;
let isDriving5 = false;
let isPregant5 = false;

if (age5 < 18 || isDriving5 || isPregant5) {
    console.log("No drinks for you")
} else {
    console.log("Have fun, but please drink sensibly");
} // Output: Have fun, but please drink sensibly

let age6 = 12;
let isDriving6 = false;
let isPregant6 = false;

if (age6 < 18 || isDriving6 || isPregant6) {
    console.log("No drinks for you")
} else {
    console.log("Have fun, but please drink sensibly");
} // Output: No drinks for you

let age7 = 18;
let isDriving7 = true;
let isPregant7 = false;

if (age7 < 18 || isDriving7 || isPregant7) {
    console.log("No drinks for you")
} else {
    console.log("Have fun, but please drink sensibly");
} // Output: No drinks for you

// Q3 Create a variablecalled openTime an another variable called closeTime which represent the opening and closing time of the resturant
// create another variable called currentTime. Use as if and or statement to determine if the resturant is closed

let openTime = 17;
let closeTime = 22;
let currentTime = 20;
if (currentTime < openTime || currentTime > closeTime) {
    console.log("closed");
} else {
    console.log("open");
} // Output: open

let openTime2 = 17;
let closeTime2 = 22;
let currentTime2 = 11;
if (currentTime2 < openTime2 || currentTime2 > closeTime2) {
    console.log("closed");
} else {
    console.log("open");
} // Output: closed

// Q4 add a value that the resturant is closed if its a Monday

let openTime3 = 17;
let closeTime3 = 22;
let currentTime3 = 11;
let isMonday = false;

if (currentTime3 < openTime3 || currentTime3 > closeTime3 || isMonday) {
    console.log("closed");
} else {
    console.log("open");
} // Output: closed

let openTime4 = 17;
let closeTime4 = 22;
let currentTime4 = 19;
let isMonday4 = true;

if (currentTime4 < openTime4 || currentTime4 > closeTime4 || isMonday4) {
    console.log("closed");
} else {
    console.log("open");
} // Output: closed

let openTime5 = 17;
let closeTime5 = 22;
let currentTime5 = 20;
let isMonday5 = false;

if (currentTime5 < openTime5 || currentTime5 > closeTime5 || isMonday5) {
    console.log("closed");
} else {
    console.log("open");
} // Output: open

// Truthy
// javascript will convert the following to a bullion and then return the first Truthy statement
let result;
result = 0 || 10;
console.log(result); //Output: 10

// another way to show this is

if (0 || 10) {
    console.log(true);
} else {
    console.log(false);
} // Output: true

// how this is used

//ask the user to enter their name
// let userInput = "";
// let name = userInput || "Dan";
// console.log(name) // Output: Dan

// let userInput2 = "Luke";
// let name2 = userInput2 || "Dan";
// console.log(name2) // Output: Luke

// let userInput3 = "";
// let name3 = userInput3 || "0";
// console.log(name3) // Output: 0 this happens as there is no truth statement so it will return the last value

let firstName = "Luke";
let lastName = "Parker";
let nickName = "Lukey";

let userName = firstName || lastName || nickName || null
console.log(userName); // Output: "Luke"

let firstName2 = "";
let lastName2 = "";
let nickName2 = "";

let userName2 = firstName2 || lastName2 || nickName2 || "Anonymous" || null
console.log(userName2); // Output: "Anonymous" null is a falsy statement

let firstName3 = "";
let lastName3 = "";
let nickName3 = "";

let userName3 = firstName3 || lastName3 || nickName3 ||  null || "Anonymous" 
console.log(userName3); // Output: "Anonymous"

// Q4 Demonstrate your understanding of using an OR statement to retrieve the first truthy value from a list. 

let userInput = "Black";
let wrappingPaperColour = userInput || "Red"
console.log(wrappingPaperColour); // Output: Black

let userInput2 = "";
let wrappingPaperColour2 = userInput2 || "Red"
console.log(wrappingPaperColour2); // Output: Red

// another test just to make sure I understand it

let paperType1 = "Christmas";
let paperType2 = "Birthday";
let paperType3 = "Girl";
let paperType4 = "Boy";

let wrappingPaperColour3 = paperType1 || paperType2 || paperType3 || paperType4 || "Red Wrapping Papper"
console.log(wrappingPaperColour3) // Output: Christmas

let paperType1a = "";
let paperType2a = "";
let paperType3a = "";
let paperType4a = "";

let wrappingPaperColour4 = paperType1a || paperType2a || paperType3a || paperType4a || "Red Wrapping Papper"
console.log(wrappingPaperColour4) // Output: Red Wrapping Papper