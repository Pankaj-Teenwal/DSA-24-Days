/**
 * @description Q.To find longest word from a string using functions.
 */


const findLongestWord = (str) => {
    let longestElement = "";
    str = str.split(" ");

    for (let i = 0; i < str.length; i++) {
        if (str[i].length > longestElement.length) {
            longestElement = str[i];
        }
    }
    return longestElement;
}

let input = "My name is ankit jain & i'm from morena pankaj";

console.log(findLongestWord(input));