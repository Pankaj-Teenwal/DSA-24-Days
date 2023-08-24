/**
 * @ description Q. To find longest word from a string using (for of Loop) means iterate by an elements not by indexing
 */

let str = "hello everyone pankajKumar here";

function findLongestWord(str){
    str = str.split(" ");
    let maxElement="";

    for(let item of str){
        if(item.length>maxElement.length){
            maxElement = item;
        }
    }
    return maxElement;
    
    
}
console.log(findLongestWord(str));