
 var myLibrary = [];

let i = 1


var database = firebase.database();
const dbRef = firebase.database().ref("Books");




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
   
  }


}
let newBook;
    function createNewBook(){
     
    	newBook = new Book();
    	myLibrary.push(newBook);
        database.ref("Books").push(newBook);
        
        
       displayBookL();
        
    }

   
 function displayBookL()
 {
let xyz = myLibrary.length - 1;
console.log(xyz);
let bookItem = document.createElement('bookObject');

bookItem.setAttribute("id", "book" + xyz);
bookItem.setAttribute("class", "bookTransition");
let k = 0;
if(myLibrary[xyz].Read == 2)
{k = 2;
bookItem.style.backgroundColor = 'rgba(72, 158, 32, 0.568)' }
else {k =1;
  bookItem.style.backgroundColor = 'rgba(182, 83, 83, 0.568)'}

bookItem.innerHTML=  "Title: " + '<button class = "delButton" id = "deleteButton" aria-label="Delete Card">×</button>' + myLibrary[xyz].Title + "<br/><br/>Author: " + myLibrary[xyz].Author + "<br/><br/>Pages: " + myLibrary[xyz].Pages + "<br/><br/>Read: " +`<input type="range" min="1" max="2" value=${k} class="slider" id="myRange"/>` ; 
document.querySelector(".container").appendChild(bookItem);


 }

 

function displayBook()
{

  let ss = 0;
    for (let i = 0; i <= myLibrary.length; i++)
        {
          let bookItem = document.createElement('bookObject');

          bookItem.setAttribute("id", "book" + ss);
          bookItem.setAttribute("class", "bookTransition");

          
          
          let k = 0;
          if(myLibrary[ss].Read == 2)
          {k = 2;
          bookItem.style.backgroundColor = 'rgba(72, 158, 32, 0.568)' }
          else {k =1;
            bookItem.style.backgroundColor = 'rgba(182, 83, 83, 0.568)'}
          
   bookItem.innerHTML=  "Title: " + '<button class = "delButton" id = "deleteButton" aria-label="Delete Card">×</button>' + myLibrary[ss].Title + "<br/><br/>Author: " + myLibrary[ss].Author + "<br/><br/>Pages: " + myLibrary[ss].Pages + "<br/><br/>Read: " +`<input type="range" min="1" max="2" value=${k} class="slider" id="myRange"/>` ; 
    document.querySelector(".container").appendChild(bookItem);
    ss += 1;
  
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
      let stringname = event.target.parentElement.id;
      stringname = stringname.slice(-1);
      

     let sliderValue = event.target.value;
     let cardID = event.target.parentNode;

     
     myLibrary[stringname].Read = sliderValue;
     dbRef.remove();
     for (let a = 0; a<=myLibrary.length; a++)
     {
       database.ref("Books").push(myLibrary[a]);
     }


      if( sliderValue == 2)
      {cardID.style.backgroundColor = 'rgba(72, 158, 32, 0.568)'}
      else if (sliderValue == 1)
      {cardID.style.backgroundColor = 'rgba(182, 83, 83, 0.568)';}
    }
  });
  
 




document.getElementById("container").addEventListener("click", function(event) {
  if ( event.target.className === 'delButton') {
    
    if(confirm('Are you sure you want to delete this card?')){
      let stringname = event.target.parentElement.id;
      stringname = stringname.slice(-1);
      myLibrary.splice(stringname,1)
      console.log(myLibrary.length);
    event.target.parentElement.remove();}
    dbRef.remove();
    for (let a = 0; a<=myLibrary.length; a++)
    {
      database.ref("Books").push(myLibrary[a]);
    }
   
    
}});


window.onload = function AddDBBooks(snapshot) {
  
  console.log(myLibrary);
   dbRef.once("value", function (snap) { 
     var data = snap.val();
     console.log(data)
     let j = 0;
     for (key in data)  {
      let varia = data[key];
      varia = new Book;
      myLibrary.push(data[key]);
     


      console.log(myLibrary[j].Title)
       console.log(varia)
       console.log(myLibrary.length)
       j += 1;
       
     }
     displayBook();
   }, function (errorObject) {
       console.log("The read failed: " + errorObject.code);
       reject({
           error: true
       })
   });
   console.log(myLibrary.length)
   
 }
