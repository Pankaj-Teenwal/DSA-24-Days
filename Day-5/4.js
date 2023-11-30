/**
 * @description Reverse number
 */

function reverseWord(str){
    //Your code here
    str = str.split();
    let result = '';
    for(let i = str.length-1; i>=0; i--){
        result = result.concat(str[i]);
    }
    return result;
}

console.log(reverseWord("123"));