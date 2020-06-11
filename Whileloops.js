// while loop

//example
// let i = 0;
// while (i < 4) {
//     console.log(i);
//     i++
// }

// while looks keep excuiting until the condition is no longer meet

// Q1 Write a while loop to log the number from 3 to 8 to the console (inclusive)

let i = 3;
while (i <= 8) {
    console.log(i);
    i++
} // Output:
// 3
// 4
// 5
// 6
// 7
// 8

// Q2 Write all the even numbers between 14 and 20 to the console (inclusive)

let e = 14;
while (e <= 20) {
    console.log(e);
    e += 2;
} // Output:
// 14
// 16
// 18
// 20

// Q3 Write all the numbers between 7 and 12 to the console in reverse order (i.e. 12, 11 etc) (inclusive)

let r = 12;
while (r >= 7) {
    console.log(r);
    r--;
} // Output:
// 12
// 11
// 10
// 9
// 8
// 7

//Q4 Write all the numbers between 33 and 45 that are divisible by 3 in reverse order(inclusive)

let d = 45;
while (d >= 33) {
    console.log(d);
    d -= 3;
} // Output:
// 45
// 42
// 39
// 36
// 33