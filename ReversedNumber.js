//  Convert Number to Reversed Array of Digits

//  DESCRIPTION:
//  ==> Given a random number, you have to return the digits of this number within an array in reverse order.

//  EXAMPLE: 
//  348597 ==> [7, 9, 5, 8, 4, 3]


function digitize(num){
    //Use the "toString" method to convert the number 'num' to a string so it can be split into individual characters.
    //Use the "split" method to split the string into an array of individual characters (digits as strings).
    //Use the "map" method to convert each character (string) back into a number.
    //Reverse the array to change the order of the digits.
    return num.toString().split('').map((e) => Number(e)).reverse();
}

console.log(digitize(1234)); //Output: [4, 3, 2, 1]
// Step 1 :   The input number is converted to a string using the .toString() method.
// Step 2 :   The string "1234" is split into an array of characters using the .split('') method.
            //After splitting, the result is ['1', '2', '3', '4'].
// Step 3 :   The .map() method is applied to each element of the array. Each character is converted back into a number using the Number() function.
            //After mapping, the result is [1, 2, 3, 4].
// Step 4 :   The .reverse() method is used to reverse the order of the array and returned back to the function.
            //After reversing, the result becomes [4, 3, 2, 1].