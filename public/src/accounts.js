const findAccountById=(accounts, id)=>{
  return accounts.find((account)=>account.id===id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA,accountB)=>accountA.name.last>accountB.name.last? 1:-1)
}

function getTotalNumberOfBorrows(account, books) {
  let {id} = account
  let borrowedCount = 0
  for(let book in books){
    let {borrows} = books[book]
    //borrows.reduce((item)=>{if(item.id===id){borrowedCount+=1}})
    borrows.forEach(item => {
      if(item.id===id){borrowedCount+=1}
    });
  }
  return borrowedCount
}

function getBooksPossessedByAccount(account, books, authors) {
  let {id} = account
  let list = []
  for(let book in books){
    let {borrows} = books[book]
    borrows.forEach(item => {
      if(item.id===id&&item.returned===false){books[book].author = authors.find((author)=>author.id===books[book].authorId);
      list.push(books[book]);
      }
    });
  }
  console.log(list)
  return list
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
