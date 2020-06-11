// for loop

// example
// let i = 0 is te incrementor
// the incrementor runs once before the loop starts

// i < 5 is the condition
// the condition is checked once before each iteration of the loop.
// if it is false the loop is broken

// i++ is the Incrementor/Incrementing Statement
// the incrementor is run once after each iteration of the loop.

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// } // Output:
// 0
// 1
// 2
// 3
// 4

// Q1 Write a for loop that logs all the numbers between 2 and 6 (inclusive)

// for (let e = 2; e <= 6; e++) {
//     console.log(e);
// } // Output:
// // 2
// // 3
// // 4
// // 5
// // 6

// // Q2 Write a for loop that logs all the odd number between 10 and 20

// for (let O = 11; O <= 20; O += 2) {
//     console.log(O);
// } // Output:
// // 11
// // 13
// // 15
// // 17
// // 19

// // Q3 Write a for loop that logs all the numbers between negative 4 and positive 3 in reverse order(start at 3 go to negative 4 inclusive)

// for (let r = 3; r >= -4; r--) {
//     console.log(r);
// } //Output:
// // 3
// // 2
// // 1
// // 0
// // -1
// // -2
// // -3
// // -4

// // Q4 Write a for loop that logs all the numbers that are multiples of 5 between 30 and 75

// for (let m = 30; m <= 75; m += 5) {
//     console.log(m);
// } // Output:
// // 30
// // 35
// // 40
// // 45
// // 50
// // 55
// // 60
// // 65
// // 70
// // 75

// // %
// //Write a for loop that logs all the odd number between 9 and 17

// for (let i = 9; i <= 17; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// } 

// Q1 Write a for loop that logs all the even numbers between 10 and 16 (inclusive. You must use a contine statement)

for (let a = 10; a <= 16; a++) {
    if (a % 2 == 1) {
        continue;
    }
    console.log(a);
} // Output:
// 10
// 12
// 14
// 16

// // Q2 Write a for loop that logs all the odd numbers between 33 and 45 (inclusive) in reverse order. You must use a continue statement.

for (let b = 45; b >= 33; b--) {
    if (b % 2 == 0) {
        continue;
    }
    console.log(b);
} // Output:
// 45
// 43
// 41
// 39
// 37
// 35
// 33

// // Q3 Write a for loop that logs all the numbers from 50 to 100 that when divided by 10 have a remainder of 5.
// // You must use a continue statement.

for (let c = 50; c <= 100; c++) {
    if (c % 10 != 5) {
        continue;
    }
    console.log(c);
} // Output:
// 55
// 65
// 75
// 85
// 95

// Q4 Write a while loop that logs all the even numbers between 10 and 16 (inclusive. You must use a contine statement)

let d = 10
while (d <= 16) {
    if (d % 2 == 1) {
        d++
        continue;
    }
    console.log(d);
    d++
} // Output:
// 10
// 12
// 14
// 16

// // Q5 Write a while loop that logs all the odd numbers between 33 and 45 (inclusive) in reverse order. You must use a continue statement.

let e = 45
while (e >= 33) {
    if (e % 2 == 0) {
        e--
        continue
    }
    console.log(e);
    e--
} // Output:
// 45
// 43
// 41
// 39
// 37
// 35
// 33

// // Q6 Write a while loop that logs all the numbers from 50 to 100 that when divided by 10 have a remainder of 5.
// // You must use a continue statement.
let f = 50
while (f <= 100) {
    if (f % 10 != 5) {
        f++
        continue;
    }
    console.log(f);
    f++
} // Output:
// 55
// 65
// 75
// 85
// 95




