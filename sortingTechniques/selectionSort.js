
const selectionSort = (arr)=>{
    
    for(let i=0; i<arr.length-1;i++){
        let minIndex = i;

        for(let j = i+1; j<arr.length; j++ ){

            if(arr[j]<arr[minIndex]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

   
    console.log(arr)
}


const arr = [29,72,98,13,87,66,52,51,36]

console.log(selectionSort(arr))