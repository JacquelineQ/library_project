function findAuthorById(authors, id) {
  /*The `findAuthorById()` function has two parameters, in the following order:
- An array of author objects.
- An integer ID of a single author object.
It returns the author object that has the matching ID.*/
  for (let i = 0; i < authors.length; i++) {
    if (id === authors[i].id) {
      return authors[i];
    }
  }
}

function findBookById(books, id) {
 /* The `findBookById()` function has two parameters, in the following order:
- An array of book objects.
- A string ID of a single book object.
It returns the book object that has the matching ID.*/
  for (let i =0; i < books.length; i++) {
    if (id === books[i].id) {
      return books[i];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  /*The `partitionBooksByBorrowedStatus()` function has a single parameter:
- An array of book objects.
It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.

The first array contains book objects that represent the books _that are currently checked out_, while the second array contains book objects that represent the books _that have been returned._ You can check for the return status by looking at the first transaction object in the `borrows` array.*/
 let borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  let availableBooks = books.filter((book) => book.borrows[0].returned !== false);
  return [borrowedBooks, availableBooks];

}

function getBorrowersForBook(book, accounts) {
  
  const returned = book.borrows[0].returned
  let getBorrow = book.borrows.map((borrow) => {
   let accountInfo =  accounts.find((account) =>   
     account.id === borrow.id);
    accountInfo.returned = borrow.returned;
      return accountInfo})
 
  return getBorrow.slice(0, 10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
