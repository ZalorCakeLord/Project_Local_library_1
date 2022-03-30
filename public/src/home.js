function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedCount = 0
  for(let book in books){
    let {borrows} = books[book]
    borrows.forEach(item => {
      if(item.returned===false){borrowedCount+=1}
    });
  }
  return borrowedCount
}

function getMostCommonGenres(books) {
  let ordered = [];
  let genres = {}
  let output = []
  for(let book in books){//loop through books getting genres
    genre = books[book].genre
    if(genres[genre]){genres[genre]+=1}else{genres[genre] = 1}
  }
  for (let genre in genres) {
      ordered.push([genre, genres[genre]]);
  }

  ordered.sort((x,y)=>x[1]<y[1] ? 1:-1);
  for(let i=0;i<5;i++){
    output.push({name:ordered[i][0],count:ordered[i][1]})
  }
  return output;
}

function getMostPopularBooks(books) {
  let list = []
  let output = []
  for(let book in books){
    let thisBook = books[book]
    list.push({name:thisBook.title,count:thisBook.borrows.length})
  }
  list.sort((bookA,bookB)=>bookA.count<bookB.count ? 1:-1);
  for(let i=0;i<5;i++){
    output.push(list[i])
  }
  return output
}

function getMostPopularAuthors(books, authors) {
//create list of authors a la mostPopularBooks, complete with id
// {name: 'first last',count:0,id:author.id}
let authorList = []
let output = []
for(let author in authors){
  const thisAuthor = authors[author]
  
  authorList.push({name:`${thisAuthor.name.first} ${thisAuthor.name.last}`, count:0, id:thisAuthor.id})
}
//increment count of author by id.
function incrementId(id,amount){
  authorList.forEach((author)=>{if(author.id===id){author.count+=amount}})
}
//cycle through books to get the count of books matching their id
books.forEach((book)=>{incrementId(book.authorId,book.borrows.length)})
//sort authorlist
authorList.sort((author1,author2)=>author1.count<author2.count ? 1:-1);
//push first five results to output array
for(let i=0;i<5;i++){
  let {name,count} = authorList[i]
  output.push({name,count})
}
return output
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
