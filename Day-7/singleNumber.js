/**
 * @description Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 */


const findSingleNumber = (arr)=>{
    if(arr.length == 1){
        return arr[0];
    }
    let obj = {};
    for(let i=0; i<arr.length; i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]] = obj[arr[i]]+1;
        }
        else{
            obj[arr[i]] = 1
        }
    }

    console.log(obj)

    for(let i in obj){
        // console.log(obj[i])
        if(obj[i]==1){
            return +i;
        }
    }
}

let arr = [4,1,2,1,2];

console.log("result",findSingleNumber(arr));