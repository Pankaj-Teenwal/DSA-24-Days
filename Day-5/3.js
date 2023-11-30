/**
 * @description Q. To find the largest pair of the 2 elements using indexing with unsorted elements.
 
 */

const findMax = (arr)=>{
    let max=0;
    for(let i=0; i<arr.length;i++){
        for(let j=1; j<arr.length;j++){
            if(arr[i]+arr[j]>max){
                max = arr[i]+arr[j];
            }
            else{
                obj[Comment]=1;
            }
        }
    }
    return max;
}

const findPair = (arr)=>{
    let max = findMax(arr);
    for(let i=0; i<arr.length;i++){
        for(let j=1; j<arr.length;j++){
            if(arr[i]+ arr[j] === max){
                return [arr[i], arr[j]];
            }
        }
    }
}

let arr = [10,4,5,6,3];

console.log(findPair(arr));