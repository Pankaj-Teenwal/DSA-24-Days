const findUnion = (arr1, arr2)=>{

    let arr = arr1.concat(arr2);

    let result = [];

    for(let i=0; i<arr.length;i++){
        if(result[arr[i]]){
            continue;
        }
        else{
            result.push(arr[i])
        }
    }
    return resultKeys
}

let arr1= [10,5,34,7,6,2,3,7];
let arr2= [10,5,23,34,6,7,5,4,3,9,45,23];

console.log(findUnion(arr1, arr2))