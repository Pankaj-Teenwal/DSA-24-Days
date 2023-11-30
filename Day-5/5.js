let arr = [10,3,4,55,7,4,2,6,4,1,6,8,2,1,-5,6-2,90];

const findNumberSum = (num)=>{

    for(let i=0; i<arr.length; i++){
        for(let j=0;j<arr.length; j++){
            if(arr[i]+arr[j]==num){
                return {
                    0: arr[i],
                    1:arr[j]
                }
            }
        }
    }

    return -1;
}



console.log(findNumberSum(12));


