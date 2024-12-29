//  Formatting Decimal Places

//  DESCRIPTION:
//  ==> Each number should be formatted that it is rounded to two decimal places.
//  ==> You don't need to check whether the input is a valid number because only valid number are used in the tests.

//  EXAMPLE:
//  5.5589 is rounded 5.56   
//  -3.3424 is rounded -3.34

function twoDecimals(num) {
    return Number(num.toFixed(2));
    //toFixed() : Method that converts the number <num> to a string with exactly two decimal places.
    //Number()  : Function converts the string returned by <toFixed()> method back into a numeric value.
}

console.log(twoDecimals(18.092024)); //Output: 18.09
// Step 1 :   num.toFixed(2) ==> "18.09" 
// Step 2 :   Number("18.09") ==> 18.09
// Step 3 :   Function returns 18.09