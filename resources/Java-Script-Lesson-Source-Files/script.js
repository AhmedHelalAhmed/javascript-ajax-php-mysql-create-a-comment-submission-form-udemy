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
/// JavaScript Object Notation. JSON
var myNumber = 0;

var myJSON = '{"a":1,"b":2,"c":3,"d":4,"e":5}';
console.log(myJSON);
var obj = JSON.parse(myJSON);
console.log(obj);

var newValue = obj.a + 55;
console.log(newValue);







$(function() {
    $(".col-md-3").click(function(event) {
        $.ajax({
            url: 'json.php',
            dataType: 'json',
            cache: false,
            success: function(data, status) {
                console.log(data);
                $.each(data, function(index) {
                    console.log(data[index]);
                    $('#output').append(data[index]);
                });
            },
            error: function(xhr, textStatus, err) {
                console.log(xhr);
                console.log(textStatus);
            }
        });
    });
});