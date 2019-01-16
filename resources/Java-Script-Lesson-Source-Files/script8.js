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
///Asynchronous JavaScript and XML AJAX
var myNumber = 0;
$(function() {
            $(".col-md-3").click(function(event) {
                console.log('change detected');
                var myValue = $('#MyText').val();
                console.log(myValue);
                $.ajax({
                    type: "POST",
                    url: "myphp.php",
                    data: "m=" + myValue,
                    success: function(response) {
                        console.log(response);
                        $('#output').html(response);
                    }
                });
            });
	
	





	
	
	
	
	
});

/*
$.get( "myphp.php", function( response ) {
    $('#output').html( response ); // server response
});
*/
