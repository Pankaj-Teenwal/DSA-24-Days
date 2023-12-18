let arr = [10, 7, 5, 4, 3, 2, 8, 9]

for(let i=0; i<arr.length-1;i++){

    let flag = 0;
    for(let j = 0; j<arr.length-1-i;j++){

        if(arr[j]>arr[j+1]){
            let temp =arr[j];
            arr[j]= arr[j+1];
            arr[j+1]= temp;
            flag = 1;
        }
    }
    console.log(flag)
    if(flag==0) break;
}

console.log(arr)