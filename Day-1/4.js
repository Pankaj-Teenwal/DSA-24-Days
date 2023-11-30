/**
 * @description 
 * 
 * Q. String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join.
 * 
 * 
 * step-1: first we create a empty string.
 * step-2: then we simply remove last element of the string and concat that elament to the empty string.
 */

// const reverseString = (str)=>{
//     str = str.split("");
//     let output ='';
//     for(let i= str.length-1; i>=0; i--){
//         output+=str[i];
//     }
// return output;
// }

// let string = 'pankaj kumar123';

// console.log(reverseString(string));



let string = 'pankaj kumar123';

string = string.split(" ");

string = string.reverse().join(" ")
console.log(string);