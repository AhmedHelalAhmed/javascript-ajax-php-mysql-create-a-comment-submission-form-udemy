// JavaScript Document
var myOutput = document.getElementById('output');
/// Working with Variables
var myString = 'Hello 2';
var myNumber = 100;
var myBoolean = true;

var myArray = ['Hello 2',100];
console.log(myArray);

var myObject = {firstName:"Mike",lastName:"Smith"};


var myFriend = new Object();
myFriend["firstName"] = "Lisa";
myFriend["lastName"] = "Smith";
console.log(myFriend);



function myFriends(a,b){
	this.firstName=a;
	this.lastName=b;
}
var person1 = new myFriends("Lisa","Smith");
var person2 = new myFriends("John","Jones");
console.log(person1);
console.log(person2);

person1.firstName = "newName";
console.log(person1);
console.log(person2);

myOutput.innerHTML = myObject.firstName;