let myLibrary = [];


const container = document.querySelector('.bookObject');
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
  
class Book {
constructor(Title, Author, Pages, Read) {
    this.Title = document.getElementById("name").value;
    this.Author = document.getElementById("location").value;;
    this.Pages = document.getElementById("date").value;;
    this.Read = document.getElementById("description").value;
  }

}
let newBook;
    function createNewBook(){
    	newBook = new Book();
    	myLibrary.push(newBook);
        console.log(myLibrary);
        for (let i = 0; i <= myLibrary.length; i++)
        {
        let bookItem = document.createElement('div');
        document.getElementById('list').innerHTML = "Title: " + myLibrary[i].Title + "<br/><br/>Author: " + myLibrary[i].Author + "<br/><br/>Pages: " + myLibrary[i].Pages + "<br/><br/>Read: " + myLibrary[i].Read; 
  

        container.insertAdjacentElement('afterbegin',bookItem);
        
        }
    }
    
 

 //       let	newTask = new Todo(Title, Author, Pages, Read)
   // 	myLibrary.push(newTask)
  
  //let GoT = new Book("Game of Thrones", "George RR Martin", 1000 , "No")   


   if(myLibrary.length > 0) {
  
   }

    var form = document.querySelector("form");
    

  
  
