// this is when you want to compare a single value against multiple values and have it do something different in each value

// example
// let number = 2 + 2; // Output: 2 + 2 is 4! Well Done, you got it right!
// let number = 10; // Output: You were way off!
// switch (number) {
//     case 4:
//         console.log("2 + 2 is 4! Well Done, you got it right!");
//         break; // breaks need to be put in otherwise it will keep running
//     case 3:
//     case 5: // Having the cases like this will mean that the same outcome will come for either a 3 or 5
//         console.log("Just off...Why don't you try that again");
//         break;
//     default: // a default is used when it doesn't match any of the switch statements
//         console.log("You were way off!");
//         break;
// }

// Q1 Create a switch statement that looks at the value of a number and gives you the book in the Harry Potter series that corresponds 
// with that number. Series order is below
// 1 - The Philosopher's Stone
// 2 - The Chamber of Secrets
// 3 - The Prisoner of Azkaban
// 4 - The Goblet of Fire
// 5 - The Order of the Phoenix
// 6 - The Half-Blood Prince
// 7 - The Deathly Hallows

// let book = 1; // Output: The first book in the Harry Potter Series is The Philosopher's Stone
//let book = 9; // Output: I'm sorry there are only 7 books in the Harry Potter Series, please enter a number between 1-7
let book = 7; // Output: The seventh book in the Harry Potter Series is The Deathly Hallows
switch (book) {
    case 1:
        console.log("The first book in the Harry Potter Series is The Philosopher's Stone");
        break;
    case 2:
        console.log("The second book in the Harry Potter Series is The Chamber of Secrets");
        break;
    case 3:
        console.log("The third book in the Harry Potter Series is The Prisoner of Azkaban");
        break;
    case 4:
        console.log("The fourth book in the Harry Potter Series is The Goblet of Fire");
        break
    case 5:
        console.log("The fifth book in the Harry Potter Series is The Order of the Phoenix");
        break;
    case 6:
        console.log("The sixth book in the Harry Potter Series is The Half-Blood Prince");
        break;
    case 7:
        console.log("The seventh book in the Harry Potter Series is The Deathly Hallows");
        break;
    default:
        console.log("I'm sorry there are only 7 books in the Harry Potter Series, please enter a number between 1-7");
        break;
}

// Q2 Convert the switch statement above into an if..else if..else statement

//let bookNumber = 1 // Output: The first book in the Harry Potter Series is The Philosopher's Stone
let bookNumber = 8 // Output: I'm sorry there are only 7 books in the Harry Potter Series, please enter a number between 1-7

if (bookNumber == 1) {
    console.log("The first book in the Harry Potter Series is The Philosopher's Stone");
} else if (bookNumber == 2) {
    console.log("The second book in the Harry Potter Series is The Chamber of Secrets");
} else if (bookNumber == 3) {
    console.log("The third book in the Harry Potter Series is The Prisoner of Azkaban");
} else if (bookNumber == 4) {
    console.log("The fourth book in the Harry Potter Series is The Goblet of Fire");
} else if (bookNumber == 5) {
    console.log("The fifth book in the Harry Potter Series is The Order of the Phoenix");
} else if (bookNumber == 6) {
    console.log("The sixth book in the Harry Potter Series is The Half-Blood Prince");
} else if (bookNumber == 7) {
    console.log("The seventh book in the Harry Potter Series is The Deathly Hallows");
} else {
    console.log("I'm sorry there are only 7 books in the Harry Potter Series, please enter a number between 1-7");
}

// Q3 Create a switch statement that is passed in the day of the week. For each of the below cases, print out to the console a value
// Saturday - "Ahh, I can finally relax"
// Sunday - "Ah well, the weekend is nearly over"
// Thursday/Friday - "Yay, it's almost the weekend"
// default - "Time for work then..."

// let dayOfWeek = "Saturday"; // Output: Ahh, I can finally relax
// let dayOfWeek = "Friday"; // Output: Yay, it's almost the weekend
let dayOfWeek = "Wednesday"; // Output: Time for work then...

switch (dayOfWeek) {
    case "Saturday":
        console.log("Ahh, I can finally relax");
        break;
    case "Sunday":
        console.log("Ah well, the weekend is nearly over");
        break;
    case "Thursday":
    case "Friday":
        console.log("Yay, it's almost the weekend");
        break;
    default:
        console.log("Time for work then...");
        break;
}

// Q4 Convert the above switch statement into an if statement

// let weekDay = "Saturday"; // Output: Ahh, I can finally relax
// let weekDay = "Sunday"; // Output: Ah well, the weekend is nearly over
// let weekDay = "Friday"; // Output: Yay, it's almost the weekend
let weekDay = "Wednesday"; // Output: Time for work then...

if (weekDay == "Saturday") {
    console.log("Ahh, I can finally relax");
} else if (weekDay == "Sunday") {
    console.log("Ah well, the weekend is nearly over");
} else if (weekDay == "Thursday" || weekDay == "Friday") {
    console.log("Yay, it's almost the weekend");
} else {
    console.log("Time for work then...");
}
