// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
button.addEventListener("click", determineConverter);
document.querySelector("#input-text").addEventListener("keyPress",
	function (e) {
		var key = e.which || e.keyCode;
		if (key === 13) {
			determineConverter();
		}
	});

// Create another button that, when clicked, clears any text in the input field.
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearText);

function clearText (){
	document.getElementById("clear").value="";
}

function toCelsius (x) {
	return (x - 32) / 1.8;
}

function toFahrenheit (x) {
	return (x * 1.8) + 32;
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
// fahrenheit radio button is checked
if(document.getElementById("fahrenheit").checked) {
	var fah = document.getElementById("input-text").value;
	var celOutput = toCelsius(fah);
	document.getElementById("answer").innerHTML = "<p>" + 
	celOutput +	" &deg; Celsius </p>";
}
//celsius radio button is checked
else if(document.getElementById("celsius").checked) {
	var cel = document.getElementById("input-text").value;
	var fahOutput = toFahrenheit(cel);
	document.getElementById("answer").innerHTML = "<p>" +
	fahOutput + " &deg; Fahrenheit </p>";
	}

if(celOutput > 32 || fahOutput > 90) {
	answer.className = "red-font";
}

else if(celOutput < 32 || farOutput < 0){
	answer.className = "blue-font";
}

else {
	answer.className = "green-font";
}	

}











