function _findID(array,id){
  return array.find((item)=>item.id===id)
}//helper function

function findAuthorById(authors, id) {
  return _findID(authors,id)
}

function findBookById(books, id) {
  return _findID(books,id)
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book)=>book.borrows[0].returned===false)
  const returned = books.filter((book)=>book.borrows[0].returned===true)
  returned[1].title = '<p style="  font-size: 80px; color: #fff; text-align: center; -webkit-animation: glow 1s ease-in-out infinite alternate; -moz-animation: glow 1s ease-in-out infinite alternate; animation: glow 1s ease-in-out infinite alternate;">Equivocatus Mortis</p>'
  //delete above before turning in
  return [borrowed,returned]
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book
  let output = []
  for(let borrow in borrows){
    accounts.map((account)=>{if(borrows[borrow].id===account.id){
       
      account.returned = borrows[borrow].returned
      output.push(account)
      return account
    }})
  }
  return output.slice(0,10)

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
