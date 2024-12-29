//  Basic Math Operations

//  DESCRIPTION:
//  ==> Create a function that performs four basic mathematical operations.

//  NOTE:
//  * The function should take three arguments, operation(string/char), value1(number), and value2(number).
//  * The function should return the results of the numbers after applying the chosen operation.

//  EXAMPLE: (Operator, Value1, Value2 => Output)
//  ('+', 4, 7) => 11
//  ('-', 15, 18) => -3
//  ('*', 5, 5) => 25
//  ('/', 49, 7) => 7


// Basic Math Operations using Conditional Statement
function basicMathOp(operation, value1, value2){
    if(operation == '+') return value1 + value2;
    if(operation == '-') return value1 - value2;
    if(operation == '*') return value1 * value2;
    if(operation == '/') return value1 / value2;
}

console.log(basicMathOp('*', '8', '2')); //Output: 8 * 2 = 16
// Step 1 :   Call the 'basicMathOp' function with the arguments '*', '8', and '2'.
// Step 2 :   The function checks the 'operation' and matches it to '*', so it calculates: 8 * 2 = 16
// Step 3 :   The result (16) is returned and logged to the console.




// Basic Math Operations using Eval Function
function basicMathOp(operation, value1, value2){
    //Use the 'eval()' function to dynamically evaluate the mathematical expression.
    return eval(value1 + operation + value2);
}

console.log(basicMathOp('/', '8', '2')); //Output: 8 / 2 = 4
// Step 1 :   Call the 'basicMathOp' function with the arguments '/', '8', and '2'.
// Step 2 :   It evaluates '8/2' and returns the result, which is 4.
// Step 3 :   The result (4) is then logged to the console.