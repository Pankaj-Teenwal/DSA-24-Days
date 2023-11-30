/**
 *@description Q: Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.
 * Algorithm:-
 * 
 * step-1: first we create a loop that iterate over array.
 * step-2: and we also create a empty object.
 * step-3: then we check that array element is present in array or not.
 * step-4: if not then push that element in object & then check that the next elemen addition is equal to the K.
 * step-5: if the addition is equal to the K then return the the pair.
 * 
 */

 const findNumberOfPair = (arr, target)=>{
    const obj ={};
    let count = 0;
    for(let num of arr){
        const complement = target - num;
        if(obj[complement]){
            count = count + obj[complement];
        }
        obj[complement] = obj[num]+1;
    }


    return count;
}

let arr = [1,2,5,7,11,15];
console.log(findNumberOfPair(arr,7));