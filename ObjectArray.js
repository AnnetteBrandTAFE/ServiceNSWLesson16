// // example

// // let people = [
// //     {
// //         name: "Luke",
// //         age: 23
// //     },{
// //         name: "Chris",
// //         age: 35
// //     }
// // ];

// // // to loop throught the array

// // for (const person of people) { // each time we loop through the array person will be the person we are looking at
// //     console.log(`${person.name} is ${person.age} years old`)
// // }
// // // Output:
// // // Luke is 23 years old
// // // Chris is 35 years old

// // You can add a new property with an object within the objectArray

// let people = [
//     {
//         name: "Luke",
//         age: 23,
//         pet: {
//             name: "Rex",
//             age: 6,
//             species: "Dog"
//         }
//     }, {
//         name: "Chris",
//         age: 35,
//         pet: {
//             name: "Lucky",
//             age: 2,
//             species: "Cat"
//         }
//     }
// ];

// for (const person of people) {
//     console.log(`${person.name} is ${person.age} years old`)
//     console.log(`${person.name} has a pet dog called ${person.pet.name} who is ${person.pet.age} years old`)
// }
// // Output:
// // Luke is 23 years old
// // Luke has a pet dog called Rex who is 6 years old
// // Chris is 35 years old
// // Chris has a pet dog called Lucky who is 2 years old

// // if you want to get the details for one index

// for (const person of people) {
//     if (person.name == "Luke") {
//         console.log(`${person.name} is ${person.age} years old`) // Output: Luke is 23 years old
//         console.log(`${person.name} has a pet dog called ${person.pet.name} who is ${person.pet.age} years old`)
//         // Output: Luke has a pet dog called Rex who is 6 years old
//     }
// }
// //or

// console.log(`${people[0].name} is ${people[0].age} years old`); // Output: Luke is 23 years old
// console.log(`${people[0].name} has a pet called ${people[0].pet.name}`); // Output: Luke has a pet called Rex

// // //or
// for (const person of people) {
//     console.log(`${person.name} is ${person.age} years old`)
//     if (person.pet.species == "Dog") {
//         console.log(`${person.name} has a pet dog called ${person.pet.name} who is ${person.pet.age} years old`)
//         // Output: Luke has a pet dog called Rex who is 6 years old
//     }
// }


// // Q1 Create an array of objects called libraries. 
// // Each should have the following properties: 
// // name which should be a string, 
// // address which should be a string and 
// // headLibrarian which should be an object with properties name and age.

// let libraries = [
//     {
//         name: "Bodleian Library",
//         address: "Broad St, Oxford OX 3BG, United Kingdom",
//         headLibrarian: {
//             name: "Richard Ovenden",
//             age: 56,
//         },
//     }, {
//         name: "Library of Congress",
//         address: "101 Independence Ave SE, Washington DC 20540, United States",
//         headLibrarian: {
//             name: "Carla Hayden",
//             age: 67,
//         },
//     }, {
//         name: "State Library Victoria",
//         address: "328 Swanston St, Melbourne VIC 3000",
//         headLibrarian: {
//             name: "Kate Torney",
//             age: 15,
//         },
//     }, {
//         name: "National Library of Iran",
//         address: "Tehran, Iran",
//         headLibrarian: {
//             name: "Ashraf Boroujerdi",
//             age: 20,
//         },
//     }
// ]
// // Q2 For each Library, add a property called books which sholuld be an array of objects. 
// // Each book should have the following properties: title, author, yearOfPublication

// libraries[0].books = [
//     {
//         title: "Don Quixote",
//         author: "Miguel De Cervantes",
//         yearOfPublication: 1605
//     }, {
//         title: "Pilgrim's Progress",
//         author: "John Bunyan",
//         yearOfPublication: 1678
//     }, {
//         title: "Robinson Crusoe",
//         author: "Daniel Defoe",
//         yearOfPublication: 1719
//     }, {
//         title: "Gulliver's Travels",
//         author: "Jonathan Swift",
//         yearOfPublication: 1726
//     }, {
//         title: "Tom Jones",
//         author: "Henry Fielding",
//         yearOfPublication: 1749
//     }
// ]
// //console.log(libraries[0].books);
// libraries[1].books = [
//     {
//         title: "Clarissa",
//         author: "Samuel Richardson",
//         yearOfPublication: 1748
//     }, {
//         title: "Tristram Shandy",
//         author: "Laurence Sterne",
//         yearOfPublication: 1759
//     }, {
//         title: "Dangerous Liaisons",
//         author: "Pierre Choderlos De Laclos",
//         yearOfPublication: 1782
//     }, {
//         title: "Emma",
//         author: "Jane Austin",
//         yearOfPublication: 1815
//     }, {
//         title: "Frankenstine",
//         author: "Mary Shelley",
//         yearOfPublication: 1818
//     }
// ]
// //console.log(libraries[1].books);
// libraries[2].books = [
//     {
//         title: "Nightmare Abbey",
//         author: "Thomas Love Peacock",
//         yearOfPublication: 1818
//     }, {
//         title: "The Black Sheep",
//         author: "Honoré De Balzac",
//         yearOfPublication: 1842
//     }, {
//         title: "The Charterhouse of Parma",
//         author: "Stendhal",
//         yearOfPublication: 1839
//     }, {
//         title: "The Count of Monte Cristo",
//         author: "Alexandre Dumas",
//         yearOfPublication: 1844
//     }, {
//         title: "Sybil",
//         author: "Benjamin Disraeli",
//         yearOfPublication: 1973
//     }
// ]
// //console.log(libraries[2].books);
// libraries[3].books = [
//     {
//         title: "Charlotte's Web",
//         author: "EB White",
//         yearOfPublication: 1952
//     }, {
//         title: "Harry Potter and the Goblet of Fire",
//         author: "JK Rowling",
//         yearOfPublication: 2000
//     }, {
//         title: "Harry Potter and the Order of the Phoenix",
//         author: "JK Rowling",
//         yearOfPublication: 2003
//     }, {
//         title: "Harry Potter and the Half-Blood Prince",
//         author: "JK Rowling",
//         yearOfPublication: 2005
//     }, {
//         title: "Harry Potter and the Deathly Hallows",
//         author: "JK Rowling",
//         yearOfPublication: 2007
//     }
// ]
// //console.log(libraries[3].books);

// // Q3 Use for..of and/or for..in loops to write the book titles across all the libraries that have been published in the last 20 years.

// for (const library of libraries) {
//     for (const book of library.books) {
//         if (book.yearOfPublication > 2000) {
//             console.log(book.title);
//         }
//     }
// }
// // Output:
// // Harry Potter and the Order of the Phoenix
// // Harry Potter and the Half-Blood Prince
// // Harry Potter and the Deathly Hallows

// // Q4 Use for..of and/or for..in loops to write all of the authors of books that appear in a library with a librarian that is under 30 years old.

// for (const libarian of libraries) {
//     if (libarian.headLibrarian.age < 30) {
//         for (const author of libarian.books)
//             console.log(author.author);
//     }
// }
// // Output:
// // Thomas Love Peacock
// // Honoré De Balzac
// // Stendhal
// // Alexandre Dumas
// // Benjamin Disraeli
// // EB White
// // JK Rowling
// // JK Rowling
// // JK Rowling
// // JK Rowling
// // Bodleian Library
// // Library of Congress
// // State Library Victoria

// // Q5 Use for..of and/or for loops to write all the names of libraries that have at least 3 books published before 2000

// for (const element of libraries) {
//     let bookPrior2000 = 0;
//     for (const yearPublished of element.books) {
//         if (yearPublished.yearOfPublication < 2000) {
//             bookPrior2000++
//         }
//     }
//     if (bookPrior2000 >= 3) {
//         console.log(element.name)
//     }
// }
// // Output:
// // Bodleian Library
// // Library of Congress
// // State Library Victoria

// More questions


// Create an array of objects called schools. Each school should have the following properties: 
// name (string), address (string), headTeacher (object: title(string), lastName(string))

// Add a property called students to each schoolwhich is an object array. 
// Each student has the following properties: firstName (string), lastName (string), age (number), yearGroup (number)

// Add a property called teachers to each school which is an object array. 
// Each teacher has the following properties: title (string), lastName (string), subject (string)

let schools = [
    {
        name: "St Josephs",
        address: "Narrabeen",
        headTeacher: {
            title: "Mrs",
            lastName: "Brown",
        },
        students: [
            {
                firstName: "Evie",
                lastName: "Viella",
                age: 12,
                yearGroup: 7,
            }, {
                firstName: "Jack",
                lastName: "Viella",
                age: 17,
                yearGroup: 11,
            }
        ],
        teachers: [
            {
                title: "Mrs",
                lastName: "Brand",
                subject: "History"
            }, {
                title: "Mr",
                lastName: "Marshall",
                subject: "Maths"
            }
        ]
    },
    {
        name: "Mater Maria",
        address: "Warriewood Valley",
        headTeacher: {
            title: "Mr",
            lastName: "Keating",
        },
        students: [
            {
                firstName: "Rosemary",
                lastName: "Buckingham",
                age: 14,
                yearGroup: 9,
            }, {
                firstName: "Ben",
                lastName: "Buckingham",
                age: 14,
                yearGroup: 9,
            }
        ],
        teachers: [
            {
                title: "Ms",
                lastName: "Glasson",
                subject: "Arts"
            }, {
                title: "Mr",
                lastName: "Pecker",
                subject: "Woodwork"
            }
        ]
    }
]

// Q1 Use for..of loop(s) to write out all the students with a yearGroup greater than 9

for (const element of schools) {
    for (const student of element.students) {
        if (student.yearGroup > 9) {
            console.log(`${student.firstName} ${student.lastName}`);
        }
    }
}

// Q2 Use for..of loop(s) to write out all the teachers that work at a school with 4 students or less

for (const element of schools) {
    for (const teacher of element.teachers) {
        if (element.students.length <= 4)
            console.log(`${teacher.title} ${teacher.lastName}`);
    }
}

// Q3 Use for..of loop(s) to write out the full names of all students who have an age of 12 and a yearGroup of 7

for (const element of schools) {
    for (const student of element.students) {
        if (student.yearGroup == 7 && student.age == 12) {
            console.log(`${student.firstName} ${student.lastName}`);
        }
    }
}

// Q4 Use for..of loop(s) and any other method you know to log how many students are in each yearGroup across all schools 
// (assume yearGroup is a whole number from 0 - 12)

let yearGroupsCounts = [];
for (let i = 0; i <= 12; i++) {
    yearGroupsCounts.push(0);
} // another way to write the above is let yearGroupCounts = new Array(13).fill(0)

for (const school of schools) {
    for (const student of school.students) {
        yearGroupsCounts[student.yearGroup]++;
    }
}

for (let i = 0; i < yearGroupsCounts.length; i++) {
    if (i == 0) {
        console.log(`There are ${yearGroupsCounts[i]} students in kindergarden`);
    } else {
        console.log(`There are ${yearGroupsCounts[i]} students in Year ${i}`);
    }

}
