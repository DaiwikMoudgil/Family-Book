  
var images = ["Father.jpg","MOTHER.jpg","MY.jpg","US.jpg"]
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update(){

 
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}