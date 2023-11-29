/**
 * @description Remove Duplicate characters from String.
 * 
 * we can have 2 approach for this question. 
 * 
 * approach-1: 
 * 1. take a empty array and push all the unique character to that array.
 * 
 * approach-2 take a empty object and set all array element to the object and then we have the keys of the object as unique values. 
 */


const removeDuplicateCharacters = (arr)=>{
    let resultObj = {};

    for(let i=0; i<arr.length;i++){
        if(resultObj.hasOwnProperty(arr[i])){
            resultObj[arr[i]] = resultObj[arr[i]] +1 ;
        }
        else{
            resultObj[arr[i]] = 1
        }
    }

    return Object.keys(resultObj).join("");
}

let numArr = [10,34,5,2,23,4,3,4,2,3,2,1,5,4,3,4];

console.log(removeDuplicateCharacters(numArr));
