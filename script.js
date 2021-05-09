let myLibrary = [];


const container = document.querySelector('container');
const lists = document.querySelector('#list');
//function Book() {
  // the constructor...
//}

function addBookToLibrary() {
  // do stuff here
}

//lets fucking do grid instead of flex because flex doesn't make any sense and is complete trash

/*
 Title: Game of Thrones<br/><br/>
  Author: George RR Martin<br/><br/>
  Pages: 1000<br/><br/>
  Read: Yes

*/
/* ${ getAuthor(book) } ${ getPages(book) } ${ getRead(book) } */

//const books = 
  //  { Title : 'Game of Thrones', Author : 'George RR Martin',  Pages : '1000', Read : "Yes" };
  
let Title;
let Author;
let Pages;
let Read;

class Book {
constructor(Title, Author, Pages, Read) {
    this.Title = document.getElementById("Title").value;
    this.Author = document.getElementById("Author").value;
    this.Pages = document.getElementById("Pages").value;
    if(document.getElementById("Read").checked === true){
    this.Read = "Yes";}
    else  {this.Read = "No"}
    //this.Read = "No"
  }


}
let newBook;
    function createNewBook(){
    	newBook = new Book();
    	myLibrary.push(newBook);
        console.log(myLibrary[0].Read);
        displayBook();
    }
function displayBook()
{  let bookItem = document.createElement('bookObject');
    for (let i = 0; i <= myLibrary.length; i++)
        {
   bookItem.innerHTML=  "Title: " + myLibrary[i].Title + "<br/><br/>Author: " + myLibrary[i].Author + "<br/><br/>Pages: " + myLibrary[i].Pages + "<br/><br/>Read: " + myLibrary[i].Read; 
    document.querySelector(".container").appendChild(bookItem);}
}
 

 //       let	newTask = new Todo(Title, Author, Pages, Read)
   // 	myLibrary.push(newTask)
  
  //let GoT = new Book("Game of Thrones", "George RR Martin", 1000 , "No")   




    var form = document.querySelector("form");
    
    

  
  
