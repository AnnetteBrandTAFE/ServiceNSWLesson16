// Q1 Create an array of objects called libraries. 
// Each should have the following properties: 
// name which should be a string, 
// address which should be a string and 
// headLibrarian which should be an object with properties name and age.

let libraries = [
    {
        name: "Mona Value Libary",
        address: "Mona Value Road",
        headLibrarian: "Martha Stewart",
        age: 35,
        books: [
            {
                title: " Harry Potter 1",
                author: "JK Rowling",
                yearOfPublication: 1998,

                title: "Harry Potter 2",
                author: "JK Rowling",
                yearOfPublication: 1999,

                title: "Mythical beasts and where to find them",
                author: "JK Rowling",
                yearOfPublication: 2007
            }]
    }, {
        name: "Dee Why Libary",
        address: "Pittwater Road Dee Why",
        headLibrarian: "Daniel Craig",
        age: 25,
        books: [
            {

                title: "Lord of the rings 1",
                author: "RJ Toilken",
                yearOfPublication: 2015,

                title: "Lord of the rings 2",
                author: "RJ Toilken",
                yearOfPublication: 2005,

                title: "Lord of the rings 3",
                author: "RJ Toilken",
                yearOfPublication: 2001
            }]
    }
]

// Q2 For each Library, add a property called books which sholuld be an array of objects. 
// Each book should have the following properties: title, author, yearOfPublication

// Q3 Use for..of and/or for..in loops to write the book titles across all the libraries that have been published in the last 20 years.


for (const library of libraries) {
    for (const book of library.books) {
        if (book.yearOfPublication > 2000) {
            console.log(book.title);
        }
    }
}

// Q4 Use for..of and/or for..in loops to write all of the authors of books that appear in a library with a librarian that is under 30 years old.

//  for (const ages of libraries) {
//     if (ages.headLibrarian.age < 30) {
//         for (const author of ages.books) {
//             console.log(author.author);
//         }
//     }

// }

// for (const libarian of libraries) {
//         if(libarian.headLibrarian.age<30){
//             for(const author of libarian.books )
//             console.log(author.author);
//         }
//     }
// Q5 Use for..of and/or for loops to write all the names of libraries that have at least 3 books published before 2000
