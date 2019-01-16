// JavaScript Document
var myOutput = document.getElementById('output');
/// Working with Variables
var myString = "1010";
var myNumber = 105;
var myBoolean = false;
var myArray = ['Hello 2',100];
var myObject = {firstName:"Mike",lastName:"Smith"};

var output = 'Nothing';


function myFunction(a,b){
	var myNumberx = myNumber + a + b;
	myNumber=myNumber*100;
		console.log(myNumber);
		return "Mulitplied by 100 "+myNumber;
}

output = myFunction(5,5);
console.log(myNumber);


output += myFunction(15,15);
output += myFunction("Hello","World");

output += myFunction(232315,1335);







myOutput.innerHTML = output;