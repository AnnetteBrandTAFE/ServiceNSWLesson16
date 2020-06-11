// Create an array of books that are objects with the following properties: title (string), yearOfPublication (number), 
//authorId(string) and id (string) which acts as a unique identifier.

let books = [
    {
        title: "Assassin's Apprentice",
        yearOfPublication: 1995,
        authorId: "15745a97-bc11-4c29-b48d-b5fc220bf145",
        bookId: "7971be15-1c52-4d91-b493-0533ad699874",
    }, {
        title: "The Magicians",
        yearOfPublication: 2009,
        authorId: "e84cc58f-fa25-47ca-8c3d-b2d4e22a0d0a",
        bookId: "f2a9d43b-1d80-4005-9679-eac0dffe8983",
    }, {
        title: "The Belgariad",
        yearOfPublication: 1982,
        authorId: "0672b0d2-b9ed-4843-9280-ed6cef052f14",
        bookId: "6c3a0acf-4793-4427-adb1-044d4bc4cf09",
    }, {
        title: "Sabriel",
        yearOfPublication: 1995,
        authorId: "a1a3bf41-3baa-4ec7-9cb4-017b777bcddc",
        bookId: "ab1012b2-e07c-4216-b9f2-3ff39e079ade",
    }, {
        title: "Lirael",
        yearOfPublication: 2001,
        authorId: "a1a3bf41-3baa-4ec7-9cb4-017b777bcddc",
        bookId: "f90b26e4-9841-4c58-8819-ef1c2b12dca2",
    }, , {
        title: "A Game of Thrones",
        yearOfPublication: 1996,
        authorId: "fb516f0c-c4a5-412c-a4d0-7a30e7bfcc06",
        bookId: "9206df0d-9a5b-4bd8-8104-6c611d4dffec",
    }
];

// Create an array of authors that are objects with an firstName (string) and lastName (string) and Id field

let authors = [
    {
        firstName: "Robin",
        lastName: "Hobb",
        id: "15745a97-bc11-4c29-b48d-b5fc220bf145",
    }, {
        firstName: "Lev",
        lastName: "Grossman",
        id: "e84cc58f-fa25-47ca-8c3d-b2d4e22a0d0a",
    }, {
        firstName: "David",
        lastName: "Eddings",
        id: "0672b0d2-b9ed-4843-9280-ed6cef052f14",
    }, {
        firstName: "Garth",
        lastName: "Nix",
        id: "a1a3bf41-3baa-4ec7-9cb4-017b777bcddc",
    }, {
        firstName: "George R.R.",
        lastName: "Martin",
        id: "fb516f0c-c4a5-412c-a4d0-7a30e7bfcc06",
    }
];

// Q1 Create a function called getBooks which returns the titles of all books ordered by their publication year.

function getBooks() {
    function yearOfPublication(book1, book2) {
        return book1.yearOfPublication - book2.yearOfPublication;
    }
    function bookTitle(book) {
        return book.title;
    }
    return books.sort(yearOfPublication).map(bookTitle);
}
console.log(getBooks());

// // Q2 Create a function called getBook which takes an id argument and returns the book with a matching id.

function getBook(id) {
    function getBookById(book) {
        return book.bookId == id;
    }
    return books.find(getBookById);
}
let myBook = getBook("f90b26e4-9841-4c58-8819-ef1c2b12dca2");
console.log(myBook);

// // Q3 Create a function called getAuthor which takes an id argument and returns the author with the matching id.

function getAuthor(id) {
    function getAuthorById(author) {
        return author.id == id;
    }
    return authors.find(getAuthorById);
}
let myAuthor = getAuthor("fb516f0c-c4a5-412c-a4d0-7a30e7bfcc06");
console.log(myAuthor);

// Q4 Create a function called getBooksByAuthor which takes the id of an author as an argument and returns an array of all the books 
// written by that author in order of the year of publication.

function getBooks() {
    return books
        .sort((book1, book2) => book1.yearOfPublication - book2.yearOfPublication)
        .map(book => book.title);
}

function getBook(id) {
    function bookDoesMatchId(book) {
        return book.bookId == id;
    }

    return books.find(bookDoesMatchId);
}

function getAuthor(id) {
    function authorDoesMatchId(author) {
        return author.id == id;
    }

    return authors.find(authorDoesMatchId);
}

console.log(getBooks("0672b0d2-b9ed-4843-9280-ed6cef052f14"));

// Q5 Create a function called searchBooks which takes a string which is a search term as an argument. 
// The function should return all books where the title or author name contains the given string.

function searchBooks(searchTerm) {
    function termAppearsInBooksOrAuthor(book) {
        let lowerSearchTerm = searchTerm.toLowerCase();

        let author = getAuthor(book.authorId);
        return book.title.toLowerCase().includes(lowerSearchTerm) ||
            author.firstName.toLowerCase().includes(lowerSearchTerm) ||
            author.lastName.toLowerCase().includes(lowerSearchTerm);

    }

    return books.filter(termAppearsInBooksOrAuthor);
}

function sortBooks(sortField) {
    function sortByField(book1, book2) {
        if (book1[sortField] > book2[sortField]) {
            return 1;
        } else if (book1[sortField] < book2[sortField]) {
            return -1;
        } else {
            return 0;
        }
    }

    return books
        .sort(sortByField)
        .map(book => book.title);
}

console.log(searchBooks("robin"));