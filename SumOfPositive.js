//  Sum of Positive Numbers

//  DESCRIPTION:
//  ==> Get an array of numbers, return the sum of all the positive ones.

//  EXAMPLE:
//  [1, -4, 7, 12] => 1 + 7 + 12 = 20

//  NOTE:
//  * If there is nothing to sum, the sum is default to 0.


//  Sum of Positive Numbers using For Loop and If Statement
function sumOfPositive(arr){
    //Initialize a variable "initValue" with 0 to store the sum of positive numbers.
    let initValue = 0;

    //Start a "for" loop to iterate over each element in the array.
    for(let i = 0; i < arr.length; i++){
        //Check if the current element (arr[i]) is greater than 0 (positive).
        if(arr[i] > 0){
            //If the condition is true, add the current element to "initValue".
            initValue += arr[i]; //initValue = initValue + arr[i]
        }
    }
    //After the loop ends, return the final value of "initValue".
    return initValue;
}

console.log(sumOfPositive([5, -6, 1 , 3])); //Output: 5 + 1 + 3 = 9
// Step 1 :   The sumOfPositive function is called with the array [5, -6, 1, 3].
// Step 2 :   The function processes the array:
            //5 is positive, so it is added to initValue → initValue = 5.
            //-6 is negative, so it is skipped.
            //1 is positive, so it is added to initValue → initValue = 5 + 1 = 6.
            //3 is positive, so it is added to initValue → initValue = 6 + 3 = 9.
// Step 3 :   The sumOfPositive function returns the result of the loop statement and the console.log function prints the returned value (9) to the console.




//  Sum of Positive Numbers using Filter and Reduce Functions
function sumOfPositive(arr){
    //Use the "filter" method to create a new array containing only positive numbers.
    return arr.filter(function(ele){
        // For each element "ele" in "arr", include it in the new array if it is greater than 0.
        return ele > 0
    })

    //Use the "reduce" method to compute the sum of the filtered array of positive numbers.
    .reduce(function(acc, curr){
        //Add the current number ("curr") to the accumulated total ("acc"). Adding "+ 0" has no effect.
        return acc + curr + 0;
    })
}

console.log(sumOfPositive([-5, -6, 1 , 3])); //Output: 1 + 3 = 4
// Step 1 :   The sumOfPositive function is called with the array [-5, -6, 1, 3].
// Step 2 :   The .filter() method is called on the array arr. For the input [-5, -6, 1, 3], only the positive numbers [1, 3] are included in the new array.
// Step 3 :   The .reduce() method is chained to the result of the .filter() method. The callback function adds the current element to the acc value and returns the updated acc.
            //For the filtered array [1, 3].
            //On the first iteration: acc = 0, current = 1 → acc + current = 0 + 1 = 1.
            //On the second iteration: acc = 1, current = 3 → acc + current = 1 + 3 = 4.
            //After reducing, the sum of the positive numbers is 4.
// Step 3 :   The sumOfPositive function returns the result of the .reduce() operation and the console.log function prints the returned value (4) to the console.