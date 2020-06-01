// Q1
// declare a variable named myVariable
// assign a string value to a number
// convert the variable to a number
// console.log the value of the variable
// console.log the type of the variable

//example with words
let myVariable = "Hello my name is Annette";
let convertToNumber = parseInt(myVariable); // other way to do this line is let convertToNumber = Number(myVariable);
console.log(convertToNumber); // Output: NaN
console.log(typeof(convertToNumber)); // Output: number

//example with a number
let myVariable2 = "37";
let convertToNumber2 = parseInt(myVariable2);
console.log(convertToNumber2); // Output: 37
console.log(typeof(convertToNumber2)); // Output: number

// Q2
// declare another variable named myOtherVariable
// assign a boolean value to it (you select what value) true , false, "", 0, null
// convert the variable to a number
// console log the value of the variable
// console log the type of the variable

let myOtherVariable = true; // same outcome for fale, "", and null
let convertToNumber3 = parseInt(myOtherVariable);
console.log(convertToNumber3); // Output: NaN
console.log(typeof(convertToNumber3)); //Output: number

// Other way to do true and false is
let myOtherVariable3 = false; // same outcome for fale, "", and null
let convertToNumber5 = Number(myOtherVariable3);
console.log(convertToNumber5); // Output: 0,the output for "" and null is also 0,  the output for true is 1, t
console.log(typeof(convertToNumber5)); //Output: number

// another example
let myOtherVariable2 = "0";
let convertToNumber4 = parseInt(myOtherVariable2);
console.log(convertToNumber4); // Output: 0
console.log(typeof(convertToNumber4)); //Output: number 

// Q3
// declare another variable name myVariableAndMyOtherVariable
// use the + operator on myVariable and myOtherVariable and assign the result to myVariableAndMyOtherVariable
// console log the value of the variable
// console log the type of the variable

let myVariableAndMyOtherVariable3 = (convertToNumber + convertToNumber3);
console.log(myVariableAndMyOtherVariable3); // Output: NaN
console.log(typeof(myVariableAndMyOtherVariable3)); // Output: number

// another example

let myVariableAndMyOtherVariable2 = (convertToNumber2 + convertToNumber4);
console.log(myVariableAndMyOtherVariable2); // Output: 37
console.log(typeof(myVariableAndMyOtherVariable2)); // Output:number

// Q4
// change the initial values assigned to myVariable and myOtherVariable to other data types e.g. number, string, boolean, null, undefined 
// console log the value of the variable
// console log the type of the variable

 

// change the operator used on myVariable and myOtherVariable e.g. (- + / *  **)
// try using other conversions e.g. String(), Boolean(), Number()

 


// try using some other operators: % (remainder or modulus), compound operator *= += /= -/, unary x++ (postfix), ++x (prefix), -- 

 

// try comparing myVariable and myOtherVariable using comparison: == (value) and === (value and type)

 

// *Goal - experiment and see how data types and operators behave


// Challenge - output if x and y are both the same type e.g. bollean

let x = true;
let y = false;
let xDataType = typeof(x);
let yDataType = typeof(y);
let areTheSameDataType = (xDataType == yDataType);
console.log(areTheSameDataType); // Output: true which means that they are the same data type

//a test to see if the above works
let z = "Hello";
let w = false;
let zDataType = typeof(z);
let wDataType = typeof(w);
let areTheSameDataType1 = (zDataType == wDataType);
console.log(areTheSameDataType1); // Output: false which means that they are not the same data type