const findMissingNumber = (arr) => {

    let tempArr = []
    
    for(let i=0; i<arr.length;i++){
        tempArr[i] = 0;
    }
    console.log(tempArr)

    for(let i=0; i<arr.length;i++){
        tempArr[arr[i]-1] = 1
    }

    console.log("tempArr",tempArr);
    let result = 0;
    for(let i=0; i<arr.length;i++){
        if(tempArr[i]==0){
            result = i+1;
        }
    }
    return result;
}

const arr = [1, 2, 4, 6, 3, 7, 8];


console.log(findMissingNumber(arr))