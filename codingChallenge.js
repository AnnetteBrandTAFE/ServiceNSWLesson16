// Write a program that outputs the correct answers for Fizz Buzz for all the numbers up to 100.

// Fizz Buzz: Fizz Buzz is a children's game that helps to teach division. 
// Each person takes it in turn to say a number in order starting at 1. 
// Whenever you would say a number that is divisible by 3, you should instead say "Fizz" and 
// whenever you would say a number that is divisible by 5 you should instead say Buzz. 
// If a number is divisible by 3 and 5 you should instead say Fizzbuzz

// For Loop

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// While Loop

let x = 1
while (x <= 100) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("Fizzbuzz");
    }
    else if (x % 3 == 0) {
        console.log("Fizz");
    }
    else if (x % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(x);
    }
    x++
}


