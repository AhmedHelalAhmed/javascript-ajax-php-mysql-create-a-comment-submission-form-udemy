// JavaScript Document
var myOutput = document.getElementById('output');
var myButton = document.getElementById('myButton');
console.log(this.myButton);


myButton.onclick = function(){myFunction()};

/// Working with Variables
var myString = "1010";
var myNumber = 0;
var myBoolean = false;
var myArray = ['Hello 2',100];
var myObject = {firstName:"Mike",lastName:"Smith"};

var output = 'Nothing<BR>next line';


function myFunction(){
	myNumber++;
	document.getElementById('output').innerText = "clicked me " + myNumber;
}








myOutput.innerText = output;