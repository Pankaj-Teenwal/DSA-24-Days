const findFirstPair = ()=>{
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr.length;j++){
            if(arr[i]+arr[j] == 0){
                return [arr[i], arr[j]]
            }
        }
1
    }
    return [];
}

let arr = [-10,5,1,-5,-10, -5 , -10]
console.log(findFirstPair(arr));