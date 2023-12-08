/**
 * @description To find longest word from a string using (for of Loop) means iterate by an elements not by indexing. 
 */

const findlongestWord = (str)=>{
    str = str.split(" ");
    let longestWord = "";
    for(item of str){
        if(item.length>longestWord.length){
            longestWord = item;
        }
    }

    return longestWord
}

let str = "Hello Hii Buddy How are you";

console.log(findlongestWord(str));