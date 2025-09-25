const num = [1,2,3,4,5,6,7,8,9];

// const newNums = num.filter((num) => {
//     return num > 4;
// })
// console.log(newNums);

const newNum = [];

num.forEach((num) => {
    if(num > 4){
        newNum.push(num)
    }
})
console.log(newNum);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publisher: "Charles Scribner's Sons",
    established: 1925
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publisher: "Bloomsbury",
    established: 1997
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Thriller",
    publisher: "Doubleday",
    established: 2003
  }
];

const userBooks = books.filter((book) => book.genre === "Thriller");
    // if(book.genre === "Thriller")
    //     return book.genre;



console.log(userBooks);
