// An Object is a data type that can hold key value pairs

// example

// to declare an object
let person = { //{} javascript knows to create an object
    name: "Luke",
    age: 23
};
console.log(person); //{ name: 'Luke', age: 23 }

// to access a particular properity in an object

console.log(person.name); // Output: Luke

// to update an properity in an object

person.name = "Parker";
console.log(person); // Output: { name: 'Parker', age: 23 }
console.log(person.name); // Output: Parker

// To add a new object there are 2 ways

person.lastName = "Parker";
console.log(person);  // Output: { name: 'Parker', age: 23, lastName: 'Parker' }
console.log(person.name);  // Output: Parker
console.log(person.lastName); // Output: Parker

//or

//person["lastName"] = "Parker"; // instead of person.lastName = "Parker";
// this option is not commonly used 
// this can also add spaces e.g. person["Hello World!"] = "Parker"; this is sometimes used if you are logging it as a table so the table names 
// can look nice

// Another way to add a new properity within multiple elements

person.friends = ["Dan", "Alicia", "Max", "Bob"];
console.log(person);
// Output: 
// {
//     name: 'Parker',
//     age: 23,
//     lastName: 'Parker',
//     friends: [ 'Dan', 'Alicia', 'Max', 'Bob' ]
//   }

// To access a particular name within the friends list if you know the index

console.log(person.friends[2]); // Output: Max

// To loop through the friends array

for (let i = 0; i < person.friends.length; i++) {
    console.log(person.friends[i])
}
// Output:
// Dan
// Alicia
// Max
// Bob

// To get the output for each properity within the object

for (const key in person) {
    console.log(`${key} has value ${person[key]}`);
}
// Output:
// name has value Parker
// age has value 23
// lastName has value Parker
// friends has value Dan,Alicia,Max,Bob

// Q1 Create an object called pet with 2 properties name and age

let pet = {
    name: "Monty",
    age: 3
}

// Q2 Add an array as a property called owners that list all the people that live with/ own the pet

pet.owners = ["Queen", "Prince Philip", "Charles", "Camilla"];

// Q3 Loop through the oweners property and log all the names of the oweners

for (let i = 0; i < pet.owners.length; i++) {
    console.log(pet.owners[i])
}
//Output:
// Queen
// Prince Philip
// Charles
// Camilla

// Q4 Create a new object using the new Object syntax

let mythicalPets = {};

// Q5 Add a property to the object using the square bracket accessor

mythicalPets["name"] = "Draco";
console.log(mythicalPets); // Output: { name: 'Draco' }

// Q6 Add another property to the object using the dot accessor

mythicalPets.species = "Dragon"
console.log(mythicalPets); // Output: { name: 'Draco', species: 'Dragon' }

// Q7 use a for.. in to log all the keys and values in the object declared in Q4

for (const key in mythicalPets) {
    console.log(`${key} which has value ${mythicalPets[key]}`);
}
// Output:
// name which has value Draco
// species which has value Dragon