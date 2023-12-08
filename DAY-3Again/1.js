/**
 * @description To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method.
 * 
 * 
 */

// const validatePalindrome = (str)=>{

//     let result = [];

//     for(let i=str.length-1; i>=0;i--){
//         result.push(str[i])
//     }

//     result = result.join("");
//     return str===result
// }

const validatePalindrome = (str)=>{
    let result = str.split("").reverse().join("")
    return result===str
}

let str = "madam";

console.log(validatePalindrome(str));