// JavaScript Document Object Model

var myNumber = 0;
var myClass = document.getElementsByClassName('col-md-3');

function myFunction(){
	myNumber++;
	document.getElementById('output').innerText = "clicked me "+ myNumber;
}

for (i = 0; i < myClass.length; i++) {
   myClass[i].addEventListener("click",myFunction); 
}


