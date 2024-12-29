//  Repeat String


//  DESCRIPTION:
//  ==> Write a function called repeatString which repeats the given string src exactly count times.

//  EXAMPLE:
//  repeatStr(6, "I")       // Output: "IIIIII"
//  repeatStr(5, "Hello")   // Output: "HelloHelloHelloHelloHello"

//  Repeat String using For Loop
function repeatString(num, str) {
    //Initialize an empty string "newStr" to hold the result
    let newStr = "";

    //Loop "num" times to append "str" to "newStr"
    for (let i = 0; i < num; i++) {
        newStr += str //Concatenate "str" to "newStr" during each iteration (newStr = newStr + str).
    }

    //Return the final concatenated string "newStr" after the loop completes
    return newStr
}

console.log(repeatString(6, " Asterisk ")) //Output: "Asterisk Asterisk Asterisk Asterisk Asterisk Asterisk"
// Step 1 :   Initialize newStr = "" as an empty string to hold the result.
// Step 2 :   The loop runs 6 times, each time adding " Asterisk " to newStr.
// Step 3 :   After the loop ends, newStr is returned, and the console logs the result.




//  Repeat String using Repeat Function
function repeatString(num, str) {
    //The built-in "repeat()" method of the String object is used to repeat "str" "num" times.
    //The "repeat(num)" method generates a new string by concatenating "str" with itself "num" times.
    return str.repeat(num)
}

console.log(repeatString(3, " Asterisk ")) //Output: "Asterisk Asterisk Asterisk"
//Step 1 :   The repeat(num) method creates a new string by repeating the string str, num times.
//Step 2 :   The num is 3 and str is " Asterisk ", so the str.repeat(3) returns the string " Asterisk Asterisk Asterisk ".
//Step 3 :   After the string is repeated num times, the result is returned by the function, and the console logs the result.