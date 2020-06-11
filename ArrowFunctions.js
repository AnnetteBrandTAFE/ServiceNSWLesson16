// // example on changing a function to an arrow function

// function addTwo(num) {
//     return num + 2;
// }

// // step 1 to make it a arrow function. Convert the function into a function expression

// const addTwo = function (num) {
//     return num + 2;
// }

// // step 2 Remove the function keyword and add the arrow between the parameters and the funciton body

// const addTwo = (num) => {
//     return num + 2;
// }

// // step 3 (optional) If there is only 1 paramater, remove the brackets around it

// const addTwo = num => {
//     return num + 2;
// }

// // step 4 (optional) If there is only 1 line in the function body, 
// // remove the {curley brackets} that declare the function body 
// // remove the return keyword
// // put the entire function on one line

// const addTwo = num => num + 2;

// Convert all the below to an arrow function
// Q1 Create a function that takes in a name and writes "Hello" and then the person's name to the console.

const helloName = name => console.log(`Hello ${name}`);

helloName("Annette"); // Output: Hello Annette

//2 Create a function that takes in a name and returns a string with the value "Hello" and then the person's name

const hiName = name => `Hello ${name}`;

let answer = hiName("Annette");
console.log(answer); // Output Hello Annette

//Q3 Create a function that takes in 2 numbers and logs the largest of those numbers to the console

const largerNumber = (num1, num2) => {
    if (num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

largerNumber(10, 100); // Output: 100

// Q4 Create a function that takes in 2 numbers and returns the smallest of those numbers

const smallestNumber = (num1, num2) => {
    if (num1 < num2) {
        return num1
    }
    return num2
}

let smallerNumber = smallestNumber(10, 100);
console.log(smallerNumber); // Output: 10

// Q5 Update Q1 so that the name defaults to your name

const heyName = (name = "Nettie") => console.log("Hello" + " " + name)

heyName("Annette"); // Output: Hello Annette
heyName(); // Output: Hello Nettie

// Q6 Update Q2 so that the name defaults to Luke

const lukeName = (name = "Luke") => `Hello ${name}`;

let newName = lukeName("Annette");
console.log(newName); // Output Hello Annette

let newName2 = lukeName();
console.log(newName2); // Output: Hello Luke

// Q7 Update Q3 so that the second parameter defaults to 100

const largerNumber2 = (num1, num2 = 100) => {
    if (num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

largerNumber2(10); // Output: 100
largerNumber2(10, 90); // Output: 90

// Q8 Update Q4 so that both parameters default to 5

const smallestNumber2 = (num1 = 5, num2 = 5) => {
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

// How to make the below into a single line function from an arrow function

const smallestNumber3 = (num1, num2) => {
    if (num1 < num2) {
        return num1
    }
    return num2
}

// Step 1 You need to use a turnery operator

const smallestNumber3 = (num1, num2) => {
    return(num1< num2) ? num1 : num2;
}

// Step 2 (optional) if the function body is now on one line
// remove the {curley brackets} that declare the function body 
// remove the return keyword
// put the entire function on one line

const smallestNumber3 = (num1, num2) => (num1< num2) ? num1 : num2;

let number4 = smallestNumber3(12,19);
console.log(number4); // Output: 12