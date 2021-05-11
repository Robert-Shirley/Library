let myLibrary = [];
let i = 1

const container = document.querySelector('container');
const lists = document.querySelector('#list');



  
let Title;
let Author;
let Pages;
let Read;

class Book {
constructor(Title, Author, Pages, Read) {
    this.Title = document.getElementById("Title").value;
    this.Author = document.getElementById("Author").value;
    this.Pages = document.getElementById("Pages").value;
    this.Read = document.getElementById("Read").value;
    //this.Read = "No"
  }


}
let newBook;
    function createNewBook(){
    	newBook = new Book();
    	myLibrary.push(newBook);
        
        displayBook();
        clickCreate();
    }


function displayBook()
{  let bookItem = document.createElement('bookObject');

 bookItem.setAttribute("id", "book" + i);
 bookItem.setAttribute("class", "bookTransition");
i += 1;

    for (let i = 0; i <= myLibrary.length; i++)
        {let k = 0;
          if(myLibrary[i].Read == 2)
          {k = 2;
          bookItem.style.backgroundColor = 'rgba(72, 158, 32, 0.568)' }
          else {k =1;
            bookItem.style.backgroundColor = 'rgba(182, 83, 83, 0.568)'}
          console.log(k);
   bookItem.innerHTML=  "Title: " + '<button class = "delButton" id = "deleteButton" aria-label="Delete Card">×</button>' + myLibrary[i].Title + "<br/><br/>Author: " + myLibrary[i].Author + "<br/><br/>Pages: " + myLibrary[i].Pages + "<br/><br/>Read: " +`<input type="range" min="1" max="2" value=${k} class="slider" id="myRange"/>` ; 
    document.querySelector(".container").appendChild(bookItem);
  }
    
   
}

  function addChild() {
    document.getElementById('form1').style.display = 'block';
  }


    var form = document.querySelector("form");
    
    

    document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('form1');
      
      if (!container.contains(e.target)) {
          container.style.display = 'none';
      }
      
  });

 
  
  document.getElementById("boton").addEventListener("click", function() {
    var container3 = document.getElementById('form1');
    document.querySelector('#Title').value = '';
    document.querySelector('#Author').value = '';
    document.querySelector('#Pages').value = '';
    document.querySelector('#Read').value = '1';
    container3.style.display = 'none';

  });
 
   

  document.getElementById("container").addEventListener("mouseup", function(event) {
    if ( event.target.className === 'slider') {
     let sliderValue = event.target.value;
     let cardID = event.target.parentNode;
      if( sliderValue == 2)
      {cardID.style.backgroundColor = 'rgba(72, 158, 32, 0.568)'}
      else if (sliderValue == 1)
      {cardID.style.backgroundColor = 'rgba(182, 83, 83, 0.568)';}
    }
  });
  
 




document.getElementById("container").addEventListener("click", function(event) {
  if ( event.target.className === 'delButton') {
    
    if(confirm('Are you sure you want to delete this card?')){
    event.target.parentElement.remove();}
    
}});
  