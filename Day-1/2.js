/**
 * @description Q. Remove Duplicate characters from array of element and find the count of an elements using set.
 * 
 * step-1: we can convert the string input to set and then we simply return the number of elements of the set.
 
 */


let inputArr = [1,2,3,4,1,'a','f','g','e','t','e','w','u','b','u','a'];

const removeDuplicate =(inputArr)=>{
    const resultSet = new Set(inputArr)
    // return `Result array is ${resultSet.keys()} & size is ${resultSet.size}`

    return resultSet.keys() , resultSet.size
}

console.log(removeDuplicate(inputArr))