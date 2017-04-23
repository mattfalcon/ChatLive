var myFirebase = new ('https://chatlive-911f8.firebaseio.com/');
var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var postButton = document.quertySelector('#post');
//Event activity or action user does on a website (click, mouse over, submitting a form, adding input into a form)
//Event listener, listen out for an even and trigger response to an event
postButton.addEventListener("click", function() {
	var msgUser = usernameInput.value;
	var msgText = textInput.value;
	//called line 1 variable, attached set method 
	myFirebase.set(msgUser + " says: " + msgText);
	//called line 3 and output whatever value inputted and display
	textInput.value = "";

});


//set(): writes or replace data to a defined path
//update(): updates some of the keys for a defined path without replacing all the data
//push add to a list of data in the database
//transaction used for workign with complex data

