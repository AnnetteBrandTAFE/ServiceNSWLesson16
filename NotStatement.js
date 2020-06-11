// !

// examples
let value = "";
let result = !value;
console.log(value); // Output:      (blank)
console.log(result); // Output: true


let yourFavSportTeam = "";
if(!yourFavSportTeam) {
    yourFavSportTeam = "Manchester United"
}
console.log(yourFavSportTeam) // Output: Manchester United

let yourFavSportTeam2 = "Manly Sea Eagles";
if(!yourFavSportTeam2) {
    yourFavSportTeam2 = "Manchester United"
}
console.log(yourFavSportTeam2) // Output: Manly Sea Eagles

// Q1 Declare a variable called myFavouriteResturant and give it any value.
// Use an if and not statement together so that if myFavouriteResturant has a falsey value, it gets replaced with your favourite resturant

let myFavouriteResturant = "Mr Crackles";
if(!myFavouriteResturant){
    myFavouriteResturant = "The Brook Eatery"
}
console.log(`My Favourite Resturant is ${myFavouriteResturant}`) // Output: My Favourite Resturant is Mr Crackles

let myFavouriteResturant2 = "";
if(!myFavouriteResturant2){
    myFavouriteResturant2 = "The Brook Eatery"
}
console.log(`My Favourite Resturant is ${myFavouriteResturant2}`) // Output: My Favourite Resturant is The Brook Eatery

