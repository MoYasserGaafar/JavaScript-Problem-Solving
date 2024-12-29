//  Get Opposite of Integer

//  DESCRIPTION:
//  ==> Given an integer or a floating-point number, find its opposite.

//  EXAMPLE:
//  1   :   -1
//  14  :   -14
//  -34 :   34


// Get Opposite of Integer by Multiplying the input by -1
function getOpposite(num){
    //Multiply the input "num" by -1 to get its opposite (change the sign) and return the result.
    return num * -1;
}

console.log(getOpposite(22)); //Output: 22
// Step 1 :   The function getOpposite is invoked with the argument 22.
// Step 2 :   The function calculates 22 * -1, which equals -22.
// Step 3 :   The returned value (-22) is passed to the console.log function, which prints it to the console.




// Get Opposite of Integer by Returning the Negation of the Input
function getOpposite(num){
    //Return the opposite (negation) of the input "num" by prefixing it with the minus (-) operator.
    return -num;
}

console.log(getOpposite(-48));
// Step 1 :   The getOpposite function is called with -48 as the argument.
// Step 2 :   The function computes -(-48), which equals 48.
// Step 3 :   The result (48) is returned and passed to the console.log function.