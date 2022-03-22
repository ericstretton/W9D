// Create three functions and test them by calling each one three times with different arguments and console logging the returned value

// function #1: take 2 arg expected to be integers. Function adds the two arg together -->
// then, multiple the result by five.

function math(num1, num2){
    var mathedNumber = ((num1 + num2)*5);
    return mathedNumber;
}


var num1 = 3215;

var num2 = 99;

var result = math(num1, num2);
console.log(result);

// Function #2 will take in 1 argument expected to be a string. The function will return true if -->
// the string length is > 10 characters and false otherwise.

function isLongEnough(newString){
    if (newString.length >= 10){
    return true;
    }else if (newString.length < 10){
        return false;
    }else{
        console.log("Error");
    }
}

var newString = "Hello Hello Hello Hello"

console.log(isLongEnough(newString));

//Function #3 This function will take in 1 arg expected to be an array of strings.
// The function will return the first element in the array that starts with "ph"


function found(names){
    var array1 = array1.startsWith;
    if (array1.startsWith = "ph"){
        return phFirstArray;
    }else{
        console.log("Error");
    }
}


var array1 = [ "bob", "jeremy", "mary-jane", "phyllis", "timothy", "charlene"]

// var phFirstArray =  array1.filter((names) => array1.startsWith("ph"));

let startsWith = array1.startsWith("ph");

console.log(startsWith);