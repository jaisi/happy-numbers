console.log("hello there you awesome you!");

var testThisNumber = "19"
var splitIntoArray = testThisNumber.split(""); //split only works for strings not numbers
console.log ("splitIntoArray", splitIntoArray);

for (var i = 0; i < splitIntoArray.length; i++)
{
	splitIntoArray[i] = Number(splitIntoArray[i]);
}
console.log("splitIntoArray after", splitIntoArray);


var squaredValues = [];
var i = 0;
while (i < splitIntoArray.length){
	var squared = splitIntoArray[i] * splitIntoArray[i];
	squaredValues.push(squared); 
	//push adds value to end of array
	//pop removes the last element of the array
    //unshift adds value to beginning of array
    //shift removes value from beginning of array
	i++;
}

console.log("squared values", squaredValues);

//do while runs once and then checks for true false

var addTogether = squaredValues[0];
i = 0;
var total;
do {
	total = addTogether + squaredValues[i];
	i++
} while (i < squaredValues.length);
console.log("total", total);


