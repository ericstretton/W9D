// Create three functions and test them by calling each one three times with different arguments and console logging the returned value

// function #1: take 2 arg expected to be integers. Function adds the two arg together -->
// then, multiple the result by five.

function math(num1, num2){
    var mathedNumber = ((num1 + num2)*5);
    return mathedNumber;
}





var num1 = 2;

var num2 = 13;

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
