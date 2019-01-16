// JavaScript Document
var myOutput = document.getElementById('output');
/// Working with Variables
var myString = "1010";
var myNumber = 105;
var myBoolean = false;
var myArray = ['Hello 2',100];
var myObject = {firstName:"Mike",lastName:"Smith"};

var output = 'Nothing';


switch(myNumber){
	case 105:
	output="105";
	break;
	case 125:
	output="125";
	break;
	case 155:
	output="155";
	break;
	case 100:
	output+="100";
	break;
	default:
	output+="Not Found";
}


myOutput.innerHTML = output;