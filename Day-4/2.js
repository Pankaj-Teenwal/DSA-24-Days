/**
 * @description Q.To find character occurance from the string.
 * 
 *  
 * 
 */

const characterOccurance = (str,c)=>{
    let count = 0;
    for(let i=0; i<str.length;i++){
        if(c === str[i]){
            count++;
        }
    }
    return count;
}

let input = "pankaj"

console.log(characterOccurance(input,'a'));

// Q. To find longest common string from array of strings panding