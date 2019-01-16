// JavaScript Document
var myOutput = document.getElementById('output');
/// Working with Variables
var myString = "1010";
var myNumber = 100;
var myBoolean = false;
var myArray = ['Hello 2',100];
var myObject = {firstName:"Mike",lastName:"Smith"};

var output = 'Nothing';

if(myBoolean){
	//true
	output="True";
}else{
	//false
	output="False";
}

myOutput.innerHTML = output;