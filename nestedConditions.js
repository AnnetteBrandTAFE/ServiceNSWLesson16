// // examples

// let age = 23;
// let favDrink = "Wine";

// if (favDrink == "Wine") {
//     if (age < 18) {
//         console.log("You can't drink that!");
//     } else {
//         console.log("I like wine as well");
//     }
// } else {
//     console.log("that sounds like a nice drink");
// } // Output: I like wine as well

// let age2 = 15;
// let favDrink2 = "Wine";

// if (favDrink2 == "Wine") {
//     if (age2 < 18) {
//         console.log("You can't drink that!");
//     } else {
//         console.log("I like wine as well");
//     }
// } else {
//     console.log("that sounds like a nice drink");
// } // Output: You can't drink that!

// let age3 = 15;
// let favDrink3 = "Soda";

// if (favDrink3 == "Wine") {
//     if (age3 < 18) {
//         console.log("You can't drink that!");
//     } else {
//         console.log("I like wine as well");
//     }
// } else {
//     console.log("that sounds like a nice drink");
// } // Output: that sounds like a nice drink

// let age4 = 15;
// let favDrink4 = "Red Bull";

// if (favDrink4 == "Wine") {
//     if (age3 < 18) {
//         console.log("You can't drink that!");
//     } else {
//         console.log("I like wine as well");
//     }
// } else if (favDrink4 == "Red Bull") {
//     if (age3 < 16) {
//         console.log("You shouldn't be having those")
//     } else {
//         console.log("Red Bull is too sweet for me")
//     }
// } else {
//     console.log("that sounds like a nice drink");
// } // Output: You shouldn't be having those

// Q1 Write a decision tree that checks the colour and price of a car
// If the price is over 50000 and the colour is red than log "I like red cars"
// If the price is over 50000 and the colour is not red then log "That's too expensive"
// If the price is under 50000 but over 10000 and the colour is blue then log "I like blue cars too" 
// If the price is under 50000 and over 10000 and the colour is red then log "I like red cars and this one's a bargin"
// If the price is under 10000 then log "WOW, what a bargin"

// let carColour = "blue";
// let carPrice = 55000; // Output: That's too expensive

// let carColour = "red";
// let carPrice = 55000; // Output: I like red cars

//  let carColour = "red";
//  let carPrice = 45000; // Output: I like red cars and this one's a bargin

//  let carColour = "blue";
//  let carPrice = 45000; // Output: I like blue cars too

//  let carColour = "pink";
//  let carPrice = 45000; // Output: The car is not red or blue

//  let carColour = "pink";
//  let carPrice = 9000; // Output: WOW, what a bargin

//  let carColour = "red";
//  let carPrice = 10000; // Output: WOW, what a bargin

// if (carPrice > 50000){
//     if (carColour == "red"){
//         console.log("I like red cars");
//     } else if (carColour != "red"){ //(carColour != "red") is not required
//         console.log("That's too expensive");
//     }
//  } else if(carPrice > 10000) {
//      if (carColour == "red"){
//          console.log("I like red cars and this one's a bargin");
//      } else if (carColour == "blue"){
//          console.log("I like blue cars too");
//      } else{
//          console.log("The car is not red or blue");
//      }
//  }else {  
//      console.log("WOW, what a bargin")
//  }


// let carColour = "blue";
// let carPrice = 55000; // Output: That's too expensive

// let carColour = "red";
// let carPrice = 55000; // Output: I like red cars

//  let carColour = "red";
//  let carPrice = 45000; // Output: I like red cars and this one's a bargin

//  let carColour = "blue";
//  let carPrice = 45000; // Output: I like blue cars too

//  let carColour = "pink";
//  let carPrice = 45000; // Output: The car is not red or blue

//  let carColour = "pink";
//  let carPrice = 9000; // Output: WOW, what a bargin

//  let carColour = "red";
//  let carPrice = 10000; // Output: WOW, what a bargin

// if (carColour == "red") {
//     if (carPrice > 50000) {
//         console.log("I like red cars");
//     } else if (carPrice > 10000) {
//         console.log("I like red cars and this one's a bargin");
//     } else {
//         console.log("WOW, what a bargin");
//     }
// } else if (carColour != "red" && carPrice > 50000) {
//     console.log("Thats too expensive");
// } else if (carColour == "blue") {
//     if (carPrice > 10000) {
//         console.log("I like blue cars too");
//     }
// } else if (carPrice > 10000) {
//     console.log("This car is not red or blue");

// } else {
//     console.log("WOW what a bargin");
// }

// Recommended Music

let favouriteGenre = "Jazz";
let favouritePeriod = "80's";

if (favouriteGenre == "Pop") {
    if (favouritePeriod == "80's") {
        console.log("You should try listening to Girls just want to have fun by Cyndi Lauper");
    } else if (favouritePeriod == "90's") {
        console.log("You should try listening to I Want It That Way by BackStreet Boys");
    } else {
        console.log("Maybe you would like Thriller by Michael Jackson");
    }
} else if (favouriteGenre == "Rock") {
    if (favouritePeriod == "80's") {
        console.log("You should try listening to Livin' On a Prayer by Bon Jovi");
    } else if (favouritePeriod == "70's") {
        console.log("You should try listening to Bohemian Rhapsody by Queen");
    } else {
        console.log("Maybe you would like Stairway to Heaven by Led Zeppellin");
    }
} else {
    console.log("Maybe you would like to listen to Shape of You by Ed Sherran");
}

