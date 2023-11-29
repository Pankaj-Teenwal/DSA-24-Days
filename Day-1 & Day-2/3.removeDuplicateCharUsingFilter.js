/**
 * 
 * @description Remove Duplicate characters from array of element using filter.
 * 
 *  
 */

const removeDuplicateCharacter = (str) => {
    let arr = str.split("");
    let resultArr = arr.filter((item,index)=>{
        let remainingArr = str.substr(index+1);
        console.log(remainingArr)
        return !remainingArr.includes(item);
    });

    return resultArr;
}
let charStr = "PankajKumar";

console.log(removeDuplicateCharacter(charStr))