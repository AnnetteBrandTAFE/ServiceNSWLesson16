//object.freese makes it read only
// const genre = Object.freeze({
//     Fantasy: "Fantasy",
//     Comedy: "Comedy"
// });

// // List of all people who can borrow books
// let borrowers = [
//     {
//         id: 1,
//         name: "Luke Parker"
//     }, {
//         id: 2,
//         name: "Jacinta Bealle"
//     }, {
//         id: 3,
//         name: "Dan Wills"
//     }
// ];

// // List of books that are avaliable to be borrowed
// let books = [
//     {
//         id: 1,
//         title: "Harry Potter and the Philosopher's Stone",
//         genre: genre.Fantasy
//     }, {
//         id: 2,
//         title: "Harry Potter and the Chamber of Secrets",
//         genre: genre.Fantasy
//     }, {
//         id: 3,
//         title: "The Hitchhiker's Guide to the Galaxy",
//         genre: genre.Comedy
//     }
// ];

// // List of all books currently being borrowed
// // this is a linking array

// let bookBorrowers = [
//     {
//         borrowerId: 1,
//         bookId: 1
//     }, {
//         borrowerId: 1,
//         bookId: 2
//     }, {
//         borrowerId: 2,
//         bookId: 1
//     }, {
//         borrowerId: 3,
//         bookId: 2
//     }
// ];

// this function outputs the borrowerId and bookId for each book that the borrower (1 in this case) has borrowed.
function getBooksByPerson(borrowerId) {
    let booksBorrowedByPerson = bookBorrowers.filter(bb => bb.borrowerId == borrowerId);
    return booksBorrowedByPerson
}
console.log(getBooksByPerson(1)); // Output: [ { borrowerId: 1, bookId: 1 }, { borrowerId: 1, bookId: 2 } ]

// this function changes the above to just give the book id
function getBooksByPerson(borrowerId) {
    let booksBorrowedByPerson = bookBorrowers.filter(bb => bb.borrowerId == borrowerId);
    let bookIds = booksBorrowedByPerson.map(bb => bb.bookId);
    return bookIds
}
console.log(getBooksByPerson(1)); // Output: [ 1, 2 ]



// to get the entire book details
function getBookById(bookId) {
    return books.find(book => book.id == bookId);
}
console.log(getBookById(1));
// Output: 
// {
//     id: 1,
//     title: "Harry Potter and the Philosopher's Stone",
//     genre: 'Fantasy'
//   }

// to get just the book title
function getBookById(bookId) {
    return books.find(book => book.id == bookId).title;
}
console.log(getBookById(1)); // Output: Harry Potter and the Philosopher's Stone

// The below will give us the books that have been borrowed by borrower with id 1
function getBookById(bookId) {
    return books.find(book => book.id == bookId);
}

function getBooksByPerson(borrowerId) {
    let booksBorrowedByPerson = bookBorrowers.filter(bb => bb.borrowerId == borrowerId);
    let bookIds = booksBorrowedByPerson.map(bb => bb.bookId);
    return bookIds.map(id => getBookById(id));
}
console.log(getBooksByPerson(1)); 
// Output:
// [
//     {
//       id: 1,
//       title: "Harry Potter and the Philosopher's Stone",
//       genre: 'Fantasy'
//     },
//     {
//       id: 2,
//       title: 'Harry Potter and the Chamber of Secrets',
//       genre: 'Fantasy'
//     }
//   ]

// To get find out who has borrowed which book (id)

function getPeopleByBook(bookId) {
    let peopleWhoHaveBorrowed = bookBorrowers.filter(bb => bb.bookId = bookId);
    let borrowersIds = peopleWhoHaveBorrowed.map(bb => bb.borrowerId);
    return borrowersIds;
}
console.log(getPeopleByBook(1));

// To get find out who has borrowed which book (name)
// You need to add the getBorrowersById function so that it can convert the id to a name
function getBorrowersById(borrowerId) {
    return borrowers.find(borrower => borrower.id == borrowerId);
}

function getPeopleByBook(bookId) {
    let peopleWhoHaveBorrowed = bookBorrowers.filter(bb => bb.bookId = bookId);
    let borrowersIds = peopleWhoHaveBorrowed.map(bb => bb.borrowerId);
    return borrowersIds.map(id => getBorrowersById(id));
}
console.log(getPeopleByBook(2));

// Output: 
// [
//     { id: 1, name: 'Luke Parker' },
//     { id: 1, name: 'Luke Parker' },
//     { id: 2, name: 'Jacinta Bealle' },
//     { id: 3, name: 'Dan Wills' }
//   ]

// Below function will output the genres of books that a person has borrowed

function getGenresBorrowedByPerson(borrowerId){
let booksBorrowed = getBooksByPerson(borrowerId); // This gets us the entire object array
return booksBorrowed.map(book => book.genre); // This breaks it down to just the genre
}
console.log(getGenresBorrowedByPerson(1)); // Output: [ 'Fantasy', 'Fantasy' ]

// The other way to write the arrays is the below

// let genres = [
//     {
//         id: 1,
//         name: "Fantasy"
//     },{
//         id: 2,
//         name: "Comedy"
//     }
// ];

// let books = [
//     {
//         id: 1,
//         title: "Harry Potter and the Philosopher's Stone",
//         genre: 1
//     }, {
//         id: 2,
//         title: "Harry Potter and the Chamber of Secrets",
//         genre: 1
//     }, {
//         id: 3,
//         title: "The Hitchhiker's Guide to the Galaxy",
//         genre: 2
//     }
// ];

// let bookBorrowers = [
//     {
//         borrowerId: 1,
//         bookId: 1
//     }, {
//         borrowerId: 1,
//         bookId: 2
//     }, {
//         borrowerId: 2,
//         bookId: 1
//     }, {
//         borrowerId: 3,
//         bookId: 2
//     }
// ];


// let borrowers = [
//     {
//         id: 1,
//         name: "Luke Parker"
//     }, {
//         id: 2,
//         name: "Jacinta Bealle"
//     }, {
//         id: 3,
//         name: "Dan Wills"
//     }
// ];

// // Below function will output the genres of books that a person has borrowed

// function getBooksByPerson(borrowerId) {
//     let booksBorrowedByPerson = bookBorrowers.filter(bb => bb.borrowerId == borrowerId);
//     let bookIds = booksBorrowedByPerson.map(bb => bb.bookId);
//     return bookIds.map(id => getBookById(id));
// }

// function getBookById(bookId) {
//     return books.find(book => book.id == bookId).title;
// }

function getGenresBorrowedByPerson(borrowerId){
let booksBorrowed = getBooksByPerson(borrowerId); 
let genreIds = booksBorrowed.map(book => book.genreId);
let genres = genreIds.map(id => getGenreById(id));
return genres.map(genre => genre.name); 
}
console.log(getGenresBorrowedByPerson(1)); 

