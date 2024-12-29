//  Double Characters of String

//  DESCRIPTION:
//  ==> Given a string, return a string in which each character (case-sensitive) is repeated once.

//  EXAMPLE: (Input => Value)
//  ("Hello World") => "HHeelloo WWoorrlldd"
//  ("1234!_ ") => "11223344!!__  "


function doubleChar(str){
    //Use the "split" method to break the string into an array of individual characters. 
    //Use the "map" method to create a new array where each character ("ele") is repeated twice.
    //Use the "join" method to combine the array back into a single string, with no separators.
    return str.split("").map(ele => ele.repeat(2)).join("");
}

console.log(doubleChar("Asterisk")); //Output: AAsstteerriisskk
// Step 1 :   The split("") method converts the string into an array of individual characters.
            //"Asterisk" becomes ["A", "s", "t", "e", "r", "i", "s", "k"].
// Step 2 :   Inside the map() callback, the ele.repeat(2) function duplicates the current character ele by repeating it twice.
            //After mapping, the array becomes ["AA", "ss", "tt", "ee", "rr", "ii", "ss", "kk"].
// Step 3 :   The join("") method takes the transformed array and combines its elements back into a single string.
            //Since "" is passed as the separator, there are no spaces or characters between the elements.
            //After joining ["AA", "ss", "tt", "ee", "rr", "ii", "ss", "kk"], the string becomes "AAsstteerriisskk".
// Step 4 :   The final string "AAsstteerriisskk" is returned by the doubleChar function and the console.log function prints the returned string.