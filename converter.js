// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
button.clickEvent("click", determineConverter);

// Create another button that, when clicked, clears any text in the input field.
var clearButton = document.getElementById("clear");
clearButton.clickEvent("click", clearText);

function clearText (){
	document.getElementById("clear").value="";
}

function toCelsius () {
	return (x - 32) / 1.8;
}

function toFahrenheit () {
	return (x * 1.8) + 32;
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	document.getElementById("input-text").value;

	if(document.getElementById("fahrenheit").checked) {
	  // fahrenheit radio button is checked
	}else if(document.getElementById("celsius").checked) {
	  //celsius radio button is checked
	}
  console.log("event", clickEvent);
}








