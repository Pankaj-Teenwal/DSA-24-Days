/**
 * 
 * @description Remove Duplicate characters from array of element and find the count of an elements using set.
 * 
 * 
 */

const removeDuplicateCharacters = (arr)=>{

    let chars = new Set(arr);
    let resultarr = [...chars]
    
    // let resultarr = new Array(...chars)
    console.log(resultarr)

    result = {
        resultArray: resultarr,
        arrayLength: resultarr.length,
    }

    return result;
}

let numArr = [10,34,5,2,23,4,3,2,4,3,5,6,7,4,2,3,2,1,5,4,3,4];

console.log(removeDuplicateCharacters(numArr));