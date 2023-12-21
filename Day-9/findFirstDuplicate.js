const findFirstDuplicate = (arr)=>{

    let resultObj = {};

    for(let i=0; i<arr.length;i++){
        if(resultObj.hasOwnProperty(arr[i])){
            return arr[i];
        }

        resultObj[arr[i]] = arr[i]
    }

}


let arr = [10,34,6,34,10,5,54,65]

console.log(findFirstDuplicate(arr));