/**
 * @description check wether two strings are anagram.
 * 
 * Input: str1 = “listen”  str2 = “silent”
Output: “Anagram”
Explanation: All characters of “listen” and “silent” are the same.

Input: str1 = “gram”  str2 = “arm”
Output: “Not Anagram”
 * 
 */

const findAnnagram = (str1, str2)=>{
    if(str1.length!=str2.length){
        return false;
    }

    str1=str1.split("").sort().join("")

    str2=str2.split("").sort().join("")

    console.log(str1 , str2)
    return str1===str2;
}


let str1 = "listen"
let str2 = "silent"
console.log(findAnnagram(str1, str2));