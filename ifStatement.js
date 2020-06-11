let name = "Annette";
if (name == "Annette"){
console.log("Your name is Annette");
}

// Q1 Write an if statement that evaluates a boolean condition.
// Make sure the statement evaluates as false

let quest1 = false;
if (quest1 == true){
console.log(" Q1 is true");
} // No output as statement is false

// Q2 Write an if statement that evaluates a number as a condition.
// Make sure the statement evaluates as false

if (0 == true){
console.log("Q2 is true")
}// No output as statement is false

// Q3 Write an if statement that evaluates a negative number as a condition.
// Make sure the statement evaluates as true

if (-20 < 1){
    console.log('Q3 is true')
} // Output: Q3 is true

// Q4 Write an if statement that evaluates a string.
// Try out the following values for the string:
// 0, false, Nan, undefined

let string1 = "0";
if (string1){
    console.log("Q4 is true")
} // Output: Q4 is true

let string2 = "false";
if (string2){
    console.log("Q4 is true")
} // Output: Q4 is true

let string3 = "NaN";
if (string3){
    console.log("Q4 is true")
} // Output: Q4 is true

let string4 = "undefined";
if (string4){
    console.log("Q4 is true")
} // Output: Q4 is true

let string5 = "";
if (string5){
    console.log("Q4 is true")
} // Output: Q4 is false as there is no value in the string