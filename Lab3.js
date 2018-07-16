/*
*Patrick Ritchie
*Count The Cart
*DVP2
*/

var itemArray = ["snack", "drink", "vegetable", "drink", "meat", "snack", "vegetable", "snack", "drink", "drink"]
var itemChoice = inputInt("Choose from the items below to see how much of each item you have in your vitual cart.\n\n" +
	"1: Snacks\n 2: Drinks\n 3: Vegetables\n 4: Meat")
var itemString = "";
function inputInt(message){
var input = "";	
while(input == "" || Number.isInteger(input) == false){
var input = window.prompt(message)
if (!Number.isInteger(parseInt(input)))
{
	alert("Please enter an interger from the choices provided to continue.")
}
else{
	input = parseInt(input)
	return input;
}
}
}

if(itemChoice == 1){
	itemString = "snack"
}
else if(itemChoice == 2){
	itemString = "drink"
}
else if(itemChoice ==3){
	itemString = "vegetable"
}
else if(itemChoice == 4){
	itemString = "meat"
}

var itemTotal = 0;

for(var i =0; i < itemArray.length; i++){
	if(itemArray[i].includes(itemString)){
		itemTotal++
	}
}
alert("In your cart you have " +itemTotal+ " "+itemString"(s)")
