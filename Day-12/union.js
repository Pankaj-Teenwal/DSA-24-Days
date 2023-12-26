const findUnion = (arr1, arr2) => {
    let arr = arr1.concat(arr2);
    let resultObj = {};

    for (let i = 0; i < arr.length; i++) {
        resultObj[arr[i]] = arr[i]
    }

    return Object.values(resultObj)
}





const arr1 = [1, 2, 3, 4, 5, 1];
const arr2 = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

console.log(findUnion(arr1, arr2))