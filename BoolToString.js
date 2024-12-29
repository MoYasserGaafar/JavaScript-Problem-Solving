//  Convert Boolean Values to String

//  DESCRIPTION:
//  ==> Complete the method that takes a boolean value and return "Yes" string for true or "No" string for false.


//  Convert Boolean Values to String using Conditional Statement
function boolToString(bool){
    if(bool == true){
        //Check if the value of 'bool' is strictly equal to true.
        return 'Yes';
        //If 'bool' is true, return the string 'Yes'.
    }
    else{
        return 'No';
        //If 'bool' is false, return the string 'No'.
    }
}

console.log(boolToString(true)); //Output: Yes
// Step 1 :   Call the 'boolToString' function with the argument 'true'.
// Step 2 :   Since 'bool' is true, it will return 'Yes'.
console.log(boolToString(false)); //Output: No
// Step 1 :   Call the 'boolToString' function with the argument 'false'.
// Step 2 :   Since 'bool' is false it will return 'No'.




//  Convert Boolean Values to String using Ternary Operator
function boolToString(bool){
    return bool ? 'Yes' : 'No';
    //Use a ternary operator to determine the return value.
    //If 'bool' is true, return the string 'Yes'. Otherwise (if 'bool' is false), return the string 'No'.
}

console.log(boolToString(true)); //Output: Yes
// Step 1 :   Call the 'boolToString' function with the argument 'true'.
// Step 2 :   The ternary operator evaluates 'bool' as true, so it returns 'Yes'.
console.log(boolToString(false)); //Output: No
// Step 1 :   Call the 'boolToString' function with the argument 'false'.
// Step 2 :   The ternary operator evaluates 'bool' as false, so it returns 'No'.