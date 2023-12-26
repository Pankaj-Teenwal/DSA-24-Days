/**
 * @description To check ending of the string matches with given character/s using inbuilt function.
 */

const isCharacterMatches =(str, char)=>{
    return str.charAt(str.length-1) == char ? true : false
}
let string = "Hello";
console.log(isCharacterMatches(string, "o"))
