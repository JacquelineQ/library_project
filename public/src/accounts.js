function findAccountById(accounts, givenid) {
  /*The `findAccountById()` function has two parameters, in the following order:
- An array of account objects.
- A string ID of a single account object.
It returns the account object that has the matching ID.*/
  let foundAccount = accounts.find((account) => account.id === givenid);
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
  /*The `sortAccountsByLastName()` function has a single parameter:
- An array of account objects.
It returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name.*/
  
 accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  /*The `getTotalNumberOfBorrows()` function has two parameters, in the following order:
- An account object.
- An array of all book objects.
It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.*/
//looking for total number of times the given account has borrowed ANY book, combined
//probably need reduce for this one
  //if account.id
   let total = 0;
  let ids = account.id;
  let getTotal = books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if(borrow.id === ids){
        total ++
      }
    })
  });
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  /*The `getBooksPossessedByAccount` function' has three parameters, in the following order:
- An account object.
- An array of all book objects.
- An array of all author objects.
It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
*/
 //given the account id, return all book objects including author info that they currently have checked out/not returned
   let result = books.filter(book => book.borrows.find(thisBook => (thisBook.id === account.id && !thisBook.returned)))
 
 result.forEach(book => {
    let thisAuthor = authors.find(author => book.authorId === author.id)
    book["author"] = thisAuthor
 })
  return result;

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
