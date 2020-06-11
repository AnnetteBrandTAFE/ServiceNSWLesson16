// The below is a good link to find different methods 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Array example
// let myArray = [
//     "Jim",
//     "Bob",
//     "Harriet",
//     "Dana"
// ];

// // find syntax this will only locate the first instance where the condition is met
// filter syntax locates all the instance where the condition is met

// function findNamesWith7Characters(element) {
//    if (element.length == 7) {
//        return true;
//    }
// }
// let nameWith7Characters = myArray.find(findNamesWith7Characters);
// console.log(nameWith7Characters); // Output: Harriet

// another way to write the above is 

// function findNamesWith7Characters(element) {
//    return element.length == 7
// }
// let nameWith7Characters = myArray.find(findNamesWith7Characters);
// console.log(nameWith7Characters); // Output: Harriet

// as this is now a 1 line function it can be written as an arroe function

// const findNamesWith7Characters = element => element.length == 7

// let nameWith7Characters = myArray.find(findNamesWith7Characters);
// console.log(nameWith7Characters); // Output: Harriet


//Exercises

// create an array of names
// create an array of numbers

let namesArray = ["Kevin", "Mary", "Helena", "Pablo", "Rosemary", "Ben", "Annette", "Fred"];

let numArray = [12, 15, 21, 42, 8];

// Q1 Write some code to find the first name in the names array that starts with an "F"

// function nameStartsWithF(element) {
//     if (element[0] == "F") {
//         return true;
//     }
// }
// console.log(namesArray.find(nameStartsWithF)); // Output: Fred

// const nameStartsWithF = element => element[0] == "F"
// console.log(namesArray.find(nameStartsWithF)); // Output: Fred

// other way to write this
let nameStartsWithF = namesArray.find(element => element[0] == "F")
console.log(nameStartsWithF); // Output: Fred

// Q2 Write some code to find the first number in the numbers array that is smaller than 10   

// function numUnder10(element) {
//     if (element < 10) {
//         return true;
//     }
// }
// console.log(numArray.find(numUnder10)); // Output: 8

// const numUnder10 = element => element < 10
// console.log(numArray.find(numUnder10)); // Output: 8

// other way to write this

let numUnder10 = numArray.find(element => element < 10)
console.log(numUnder10); // Output: 8

// Q3 Write some code to find all the names that are 4 or less characters long

// function findNamesWith4CharactersOrLess(element) {
//     if (element.length <= 4) {
//         return true;
//     }
// }
// console.log(namesArray.filter(findNamesWith4CharactersOrLess)); // Output: [ 'Mary', 'Ben', 'Fred' ]

const findNamesWith4CharactersOrLess = element => element.length <= 4
console.log(namesArray.filter(findNamesWith4CharactersOrLess)); // Output: [ 'Mary', 'Ben', 'Fred' ]

// Q4 Write some code to find all the numbers in the numbers array that are divisible by 3

// function divisibleBy3(element) {
//     if (element % 3 == 0) {
//         return true;
//     }
// }
// console.log(numArray.filter(divisibleBy3)); // Output: [ 12, 15, 21, 42 ]

const divisibleBy3 = element => element % 3 == 0
console.log(numArray.filter(divisibleBy3)); // Output: [ 12, 15, 21, 42 ]

//Create an array of people with the following properties: firstName, lastName, age

let peopleArray = [
    {
        "firstName": "Annette",
        "lastName": "Brand",
        "age": 37
    }, {
        "firstName": "Daniel",
        "lastName": "Gow",
        "age": 42
    }, {
        "firstName": "Helena",
        "lastName": "Vilela",
        "age": 41
    }, {
        "firstName": "Eve",
        "lastName": "Vilela",
        "age": 3
    }
];

// Q5 Write some code to find the first person that is under 18 years old and log their full name;

function personUnder18(person) {
    if (person.age < 18) {
        return true;
    }
}
let peopleUnder18 = peopleArray.find(personUnder18);
console.log(`${peopleUnder18.firstName} ${peopleUnder18.lastName}`) // Output: Eve Vilela

// arrow function

let under18 = peopleArray.find(person => person.age < 18)
console.log(`${under18.firstName} ${under18.lastName}`); // Output: Eve Vilela

// Q6 Write some code to get an array of all the people that have more than 10 characters in their first and last names combined
// (eg. Luke Parker has exactly 10 characters and should not be included)

function characters10OrMore(person) {
    if (person.lastName.length + person.firstName.length > 10) {
        return true;
    }
}
console.log(peopleArray.filter(characters10OrMore));
// Output:
// [
//     { firstName: 'Annette', lastName: 'Brand', age: 37 },
//     { firstName: 'Helena', lastName: 'Vilela', age: 41 }
//   ]

// arrow function

let character10OrMore = peopleArray.filter(person => person.lastName.length + person.firstName.length > 10)
console.log(character10OrMore);
// Output:
// [
//     { firstName: 'Annette', lastName: 'Brand', age: 37 },
//     { firstName: 'Helena', lastName: 'Vilela', age: 41 }
//   ]

// Q7 Write some code to find all the people that have their last name longer than their first name.

function longerLastName(person) {
    if (person.lastName.length > person.firstName.length) {
        return true;
    }
}
console.log(peopleArray.filter(longerLastName)); // Output: [ { firstName: 'Eve', lastName: 'Vilela', age: 3 } ]

// arrow function

let longLastName = peopleArray.filter(person => person.lastName.length > person.firstName.length)
console.log(longLastName); // Output: [ { firstName: 'Eve', lastName: 'Vilela', age: 3 } ]


// Every and Some Extension Method

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns a Boolean value.

// The every() method tests whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value.

// examples
// let numbers = [1, 2, 3, 4, 5];
// let hasEvenNumbers = numbers.some(num => num % 2 == 0);
// console.log(hasEvenNumbers) // Output: true

// let numbers2 = [1, 3, 5];
// let hasEvenNumbers2 = numbers2.some(num => num % 2 == 0);
// console.log(hasEvenNumbers2) // Output: false

// let people = [
//     {
//         name: "Luke",
//         age: 23
//     },{
//         name: "Hannah",
//         age: 22
//     }
// ];

// let hasPersonWithAge22 = people.some(person => person.age ==22);
// console.log(hasPersonWithAge22); // Output: true

// let hasPeopleWithAge22 = people.every(person => person.age ==22);
// console.log(hasPeopleWithAge22);  // Output: false

// Q1 Create an array of numbers. 
// Use array extension methodes to find whether all the elements in the array have a value that is not divisible by 5

let num = [1, 3, 28, 35, 50, 78, 90];

let numDivisibleBy5 = num.every(number => number % 5 == 0)
console.log(numDivisibleBy5); // Output: false

let num2 = [35, 50, 90];

let numDivisible5 = num2.every(number => number % 5 == 0)
console.log(numDivisible5); // Output: true

// Q2 Create an array of strings.
// Use array extension methods to find whether any of the elements begin with a vowel.

let string = ["Annette", "Evie", "Helena", "Rosemary"];

let elementBeginsWithVowel = string.some(name => ["a", "e", "i", "o", "u"].includes(name[0].toLowerCase()));
console.log(elementBeginsWithVowel); // Output: true

// Q3 Create an array of pets (name, age, owner) and use array extension methods to find whether any of the pets are owned by Luke.

let pets = [
    {
        name: "Benji",
        age: 3,
        owner: "Rosemary"
    }, {
        name: "Queenie",
        age: 2,
        owner: "Evie"
    }, {
        name: "Rex",
        age: 1,
        owner: "Luke"
    }
];

let ownedByLuke = pets.some(name => name.owner == "Luke");
console.log(ownedByLuke) // Output: true

// Q4 Jimmy is scared of the letter Q, write some code that takes in an array of pet objects (name, age, owner) 
// and tells Jimmy's parents if the array contains any pets that have a name or owner with the letter Q. 
// You must use a for..in loop for this.

function findPetIncludingQ(pet) {
    for (const key in pet) {
        const element = pet[key].toString().toLowerCase();
        if (element.includes("q")) {
            return true
        }
    }
}
let hasQ = pets.some(findPetIncludingQ);
console.log(hasQ);

// Sort
// The sort() method sorts the elements of an array in place and returns the sorted array. 
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code
// units values.
// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// example
let numbers = [12, 7, 8]
console.log(numbers); // Output: [ 12, 9, 8 ]
console.log(numbers.sort()); // Output: [ 12, 8, 9 ]
// the reason 12 is first as it looks like it as a string so 12 is looked at as 1

function compareNumbers(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}
console.log(numbers.sort(compareNumbers)); // Output: [ 7, 8, 12 ]

// a shorter way to write this is

function compareNumbers2(num1, num2) {
    return num1 - num2
}
console.log(numbers.sort(compareNumbers2)); // Output: [ 7, 8, 12 ]

// Q1 Create an array of number and sort them from largest to smallest

let number2 = [20, 42, 3, 80, 21];

function largestToSmallest(num1, num2) {
    if (num1 > num2) {
        return -1;
    } else if (num1 < num2) {
        return 1;
    } else {
        return 0;
    }
}
console.log(number2.sort(largestToSmallest)); // Output: [ 80, 42, 21, 20, 3 ]

// arrow function 

const largerToSmaller = (num1, num2) => num2 - num1
console.log(number2.sort(largerToSmaller)); // Output: [ 80, 42, 21, 20, 3 ]

//example

let people = [
    {
        firstName: "Margaret",
        lastName: "Elkington",
        age: 70
    }, {
        firstName: "Brendan",
        lastName: "Brand",
        age: 38
    }, {
        firstName: "John",
        lastName: "William",
        age: 76
    }, {
        firstName: "Alice",
        lastName: "Dunne",
        age: 38
    }
];

function sortByAge(person1, person2) {
    return person1.age - person2.age;
}
function sortByLastName(person1, person2) {
    if (person1.lastName.toLowerCase() < person2.lastName.toLowerCase()) {
        return -1;
    } else if (person1.lastName.toLowerCase() > person2.lastName.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}
let peopleSortedbyAgeandLastName = people.sort(sortByLastName).sort(sortByAge);
console.log(peopleSortedbyAgeandLastName);

// Output:
// [
//     { firstName: 'Brendan', lastName: 'Brand', age: 38 },
//     { firstName: 'Alice', lastName: 'Dunne', age: 38 },
//     { firstName: 'Margaret', lastName: 'Elkington', age: 70 },
//     { firstName: 'John', lastName: 'William', age: 76 }
//   ]
// Q2 Create a sort function that will sort the following array of events into chronological order:

let events = [
    {
        name: "Went on holiday",
        month: 3,
        year: 2019
    }, {
        name: "Got first car",
        month: 5,
        year: 2015
    }, {
        name: "Moved out of home",
        month: 11,
        year: 2019
    }
];

function sortByYear(event1, event2) {
    return event1.year - event2.year;
}
function sortByMonth(event1, event2) {
    return event1.month - event2.month;
}
let sortedByYearAndMonth = events.sort(sortByMonth).sort(sortByYear);
console.log(sortedByYearAndMonth);
// Output:
// [
//     { name: 'Got first car', month: 5, year: 2015 },
//     { name: 'Went on holiday', month: 3, year: 2019 },
//     { name: 'Moved out of home', month: 11, year: 2019 }
//   ]

// Q3 Sort the following array in alphabetical order by last name, then by first name
let people2 = [
    {
        firstName: "Margaret",
        lastName: "Cox"
    }, {
        firstName: "Aaryan",
        lastName: "Bauer"
    }, {
        firstName: "Asma",
        lastName: "Bauer"
    }, {
        firstName: "Jazmin",
        lastName: "Flowers"
    }
];

function sortByLastName(people1, people2) {
    if (people1.lastName.toLowerCase() < people2.lastName.toLowerCase()) {
        return -1;
    } else if (people1.lastName.toLowerCase() > people2.lastName.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}

function sortByFirstName(people1, people2) {
    if (people1.firstName.toLowerCase() < people2.firstName.toLowerCase()) {
        return -1;
    } else if (people1.firstName.toLowerCase() > people2.firstName.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}

let peopleSortedByFirstNameAndLastName = people2.sort(sortByFirstName).sort(sortByLastName);
console.log(peopleSortedByFirstNameAndLastName);
// Output:
// [
//     { firstName: 'Aaryan', lastName: 'Bauer' },
//     { firstName: 'Asma', lastName: 'Bauer' },
//     { firstName: 'Margaret', lastName: 'Cox' },
//     { firstName: 'Jazmin', lastName: 'Flowers' }
//   ]

// reduce()

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

// example

let numbers3 = [2, 3, 1, 4, 2];

function multipleReducer(acc, val) {
    return acc * val;
}
let productOfNumbers = numbers3.reduce(multipleReducer);
console.log(productOfNumbers); // Output: 48

// Math.max()
// this will take in any number of numbers and will return the largert num e.g. console.log(Math.max(2, 3, 1, 4, 2))

let num11 = 12;
let num12 = 15;
console.log(Math.max(num11, num12)); // Output: 15


// Math.min()
// this will take in any number of numbers and will return the smallest num e.g. console.log(Math.max(2, 3, 1, 4, 2))

let num3 = 12;
let num4 = 15;
console.log(Math.min(num3, num4)); // Output: 12

// Q1 Create an array of numbers and use the array.reduce method to find the smallest number in the array

let myNumbers = [2, 15, 185, 250, 40, 70, 120];

function smallestNumber(acc, val) {
    return Math.min(acc, val);
}
let answer1 = myNumbers.reduce(smallestNumber);
console.log(answer1); // Output: 2

// Q2 Create an array of strings and use the array.reduce method to find the length of the longest string in the array

let myStrings = ["Orange", "Pink", "Red", "Black"]

function longestString(acc, val) {
    return Math.max(acc, val.length)
}
let answer2 = myStrings.reduce(longestString, 0);
console.log(answer2) // Output: 6

// Q3 Create an array of objects called bankers. Each should have a name (string) and netWorth (number).
// Use the array.reduce method to find the total netWorth of all the bankers. 
// Then use that number to calculate the average netWorth of all the bankers.

let bankers = [
    {
        name: "Jeff Bezos",
        netWorth: 100,
    }, {
        name: "Bill Gates",
        netWorth: 975,
    }, {
        name: "Warren Buffett",
        netWorth: 825,
    }, {
        name: "Larry Ellison",
        netWorth: 1850,
    }, {
        name: "Mark Zuckerberg",
        netWorth: 850,
    }
]

function totalNetWorth(acc, val) {
    return acc + val.netWorth;
}
let addedNetWorth = bankers.reduce(totalNetWorth, 0);
console.log(addedNetWorth); // Output: 4600

let average = addedNetWorth / bankers.length
console.log(average); // Output: 920

// map()

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// examples

let numbers15 = [2, 5, 4, 1, 7];

function doubleNumber(num) {
    return num * 2
}
let numbersDoubled = numbers15.map(doubleNumber);
console.log(numbersDoubled); // Output: [ 4, 10, 8, 2, 14 ]

// the below example will change the teachers array to the same format at the person array
let teachers = [
    {
        givenName: "Aliya",
        surname: "Love",
        subject: "Math"
    }, {
        givenName: "Mischa",
        surname: "Each",
        subject: "History"
    }, {
        givenName: "Jenny",
        surname: "Mathews",
        subject: "Science"
    }
];

let people5 = [
    {
        firstName: "Jagoda",
        lastName: "Dowling"
    }
]

function teacherToPerson(teacher) {
    return {
        firstName: teacher.givenName,
        lastName: teacher.surname
    }
}
let teacherAsPeople = teachers.map(teacherToPerson);
console.log(teacherAsPeople);

// function printAllPeople(peopleArray) {
//     for (let person of peopleArray){
//         console.log(`${person.firstName} ${person.lastName}`)
//     }
// }

// Q1 Use the array.map function to convert an array of strings into an array of the length of each of those strings

let stringsMap = ["Annette", "Daniel", "Mary", "Kevin"]

function stringLength(string) {
    return string.length
}
let question1 = stringsMap.map(stringLength);
console.log(question1) // Output: [ 7, 6, 4, 5 ]

// Q2 Create an array of numbers. Use the array.map function to add 5 to each of those numbers

let numbersMap = [2, 5, 4, 1, 7];

function plus5(num) {
    return num + 5
}
let numbersplus5 = numbersMap.map(plus5);
console.log(numbersplus5); // Output: [ 7, 10, 9, 6, 12 ]

// Q3 Create an array of people with properties firstName and lastName. 
// Use the array.map function to create an array of the full names of each of the people.

let peopleMap = [
    {
        firstName: "Annette",
        lastName: "Brand"
    }, {
        firstName: "Daniel",
        lastName: "Gow"
    }, {
        firstName: "Mary",
        lastName: "Elikington"
    }, {
        firstName: "Kevin",
        lastName: "William"
    }
]
function fullName(people) {
    return (`${people.firstName} ${people.lastName}`)

}
let Q3 = peopleMap.map(fullName);
console.log(Q3);  // Output: [ 'Annette Brand', 'Daniel Gow', 'Mary Elikington', 'Kevin William' ]

// Q4 Create an array of pets with properties name (string), age (number) and owner (object with name and age). 
// Use the array.map function to get an array of the names of all the owners.

let petsMap = [
    {
        name: "Rex",
        age: 6,
        owner: {
            name: "Paul",
            age: 25
        }
    }, {
        name: "Lucly",
        age: 5,
        owner: {
            name: "Lucy",
            age: 60
        }
    }, {
        name: "Cotton Ball",
        age: 2,
        owner: {
            name: "Peter",
            age: 31
        }
    }, {
        name: "My Little Pony",
        age: 6,
        owner: {
            name: "Heather",
            age: 18
        }
    }
];

function owners(pet) {
    return pet.owner.name
}
let Q4 = petsMap.map(owners);
console.log(Q4); // Output:[ 'Paul', 'Lucy', 'Peter', 'Heather' ]

// forEach()
// The forEach() method executes a provided function once for each array element.

// example

let example = [2, 5, 4, 1, 7];

function logData(data) {
    console.log(data);
}
example.forEach(logData);
// Output:
// 2
// 5
// 4
// 1
// 7

// example 2

let example2 = [2, 5, 4, 1, 7];

function logData(data, index) {
    console.log(`${data} is at index ${index} of the array`);
}
// Output:
// 2 is at index 0 of the array
// 5 is at index 1 of the array
// 4 is at index 2 of the array
// 1 is at index 3 of the array
// 7 is at index 4 of the array

// below are the 3 different way to do the same thing




// Q1 Declare an array of objects with properties name and age. Use an array.forEach loop to iterate over each object and 
// print the name and age of the object ot the console. 
// so the same using a for and a for..of loop

properties = [
    {
        name: "Paul",
        age: 25
    }, {
        name: "Heather",
        age: 18
    }, {
        name: "Mark",
        age: 31
    }, {
        name: "Dennis",
        age: 50
    }, {
        name: "Henry",
        age: 43
    }
];
// for each
function nameAndAge(person) {
    console.log(person.name, person.age);
}
properties.forEach(nameAndAge);

// for
for (let i = 0; i < properties.length; i++) {
    console.log(properties[i]);
}

// for of
for (const person of properties) {
    console.log(person.name, person.age)
}
