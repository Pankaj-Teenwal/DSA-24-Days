/**
 * @description String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join.
 * 
 */

const reverseString = (str)=>{
    let arr = str.split(" ");

    return arr.reverse().join(" ")

}

let str = " Hello buddy how are you";

console.log(reverseString(str));