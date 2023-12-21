

const findUnion = (arr1, arr2)=>{
    const arr = arr1.concat(arr2)

    let resultObj = {}

    for(let i=0; i<arr.length;i++){
        resultObj[arr[i]] = arr[i];
    }

    return Object.values(resultObj)

}


let arr1 = [10, 5, 34, 7, 6, 2, 3, 7];
let arr2 = [10, 5, 23, 34, 6, 7, 5, 4, 3, 9, 45, 23];

console.log(findUnion(arr1, arr2));