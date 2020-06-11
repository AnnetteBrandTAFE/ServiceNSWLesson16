// Example
let number = 0;
if (number) {
    console.log("number is true");
} else {
    console.log("number is false");
} // Output: number is false


// Q1 Write an if else statement that evaluates a boolean condition.
// Make sure the statement evaluates as false

let quest1 = false;
if (quest1){ // this is the same as writing - if (quest1 == true){
console.log("Q1 is true");
} else {
    console.log("Q1 is false");
} // Output: Q1 is false

// Q2 Write an if else statement that evaluates a number as a condition.
// Make sure the statement evaluates as false

if(0){ //  this is the same as writing - if (0 == true){
console.log("Q2 is true");
} else {
    console.log("Q2 is false");
} // Output: Q2 is false

// Q3 Write an if else statement that evaluates a negative number as a condition.
// Make sure the statement evaluates as true

if (-20 < 1){
    console.log("Q3 is true");
} else {
    console.log("Q3 is false");
} // Output: 3 is true

// Q4 Write an if else statement that evaluates a string.
// Try out the following values for the string:
// 0, false, Nan, undefined

let string1 = "0";
if (string1){
    console.log("Q4 string1 is true");
} else {
    console.log("Q4 string1 is false");
} //Output: Q4 string1 is true

let string2 = "false";
if (string2){
    console.log("Q4 string2 is true");
} else {
    console.log("Q4 string2 is false");
} // Output: Q4 string2 is true

let string3 = "NaN";
if (string3){
    console.log("Q4 string3 is true");
} else {
    console.log("Q4 string3 is false");
} // Output: Q4 string3 is true

let string4 = "undefined";
if (string4){
    console.log("Q4 string4 is true");
} else {
    console.log("Q4 string4 is false");
} // Output: Q4 string4 is true

let string5 = "";
if (string5){
    console.log("Q4 string5 is true");
} else {
    console.log("Q4 string5 is false");
} // Output: Q4 string5 is false