//  Check Even or Odd

//  DESCRIPTION:
//  ==> Write a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//  Check Even or Odd using If Statement
function checkEvenOdd(num) {
    //Use conditional statement to check if the number is divisible by 2 using the modulus operator (%)
    //If the number is divisible by 2 (remainder is 0), it's even
    if (num % 2 == 0) {
        return "Even"; //If the condition is true, return the string "Even"
    }
    else {
        return "Odd"; //If the condition is false, return the string "Odd"
    }
}

console.log(checkEvenOdd(22)); //Output: Even
console.log(checkEvenOdd(7)); //Output: Odd

// Step 1 :   The function takes a number (num) as input.
// Step 2 :   The % operator calculates the remainder when num is divided by 2.
// Step 3 :   If num % 2 equals 0, the number is divisible by 2 (even), while if num % 2 is not 0, the number is not divisible by 2 (odd).
// Step 4 :   If num % 2 equals 0, the function returns "Even", otherwise, the function returns "Odd".




//  Check Even or Odd using Ternary Operator
function checkEvenOdd(num) {
    //Use the ternary operator to check if the number is divisible by 2 using the modulus operator (%)
    //If the number is divisible by 2 (remainder is 0), it's even
    return num % 2 == 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(10)); //Output: Even
console.log(checkEvenOdd(55)); //Output: Odd

// Step 1 :   The function takes a number (num) as input.
// Step 2 :   The % operator calculates the remainder when num is divided by 2.
// Step 3 :   If num % 2 equals 0, the number is divisible by 2 (even), while if num % 2 is not 0, the number is not divisible by 2 (odd).
// Step 4 :   If num % 2 equals 0, the function returns "Even", otherwise, the function returns "Odd".