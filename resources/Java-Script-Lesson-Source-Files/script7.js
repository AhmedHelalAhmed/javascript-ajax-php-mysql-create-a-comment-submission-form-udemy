// JavaScript Jquery
/*
var myNumber = 0;
var myClass = document.getElementsByClassName('col-md-3');

function myFunction(){
	myNumber++;
	document.getElementById('output').innerText = "clicked me "+ myNumber;
}

for (i = 0; i < myClass.length; i++) {
   myClass[i].addEventListener("click",myFunction); 
}
*/

var myNumber = 0;
$(function(){
    $(".col-md-3").on({
	mouseenter: function(){
		  $(this).css("background-color", "#0000ff");
	},
	mouseleave: function(){
		  $(this).css("background-color", "#ffffff");
	}
	});
	
	
	
});


