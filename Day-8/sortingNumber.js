const sortNumber = (arr)=>{

    for(let i=0; i<arr.length-1;i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    console.log(arr)
}


const arr = [10,65,3,46,6,76,3,22,15,65,76,34,32,35,78];

console.log("sorting with inbuilt method", arr.sort((a,b)=>a-b))

console.log("sorting without inbuilt method",sortNumber(arr));