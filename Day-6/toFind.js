const findIndexOfArrayElement = (arr, element)=>{

    for(let i=0; i<arr.length;i++){
        if(arr[i]==element){
            return i;
        }
    }
}

let arr = [10,3,5,4,56,75,354,6,5,3,2,6];

console.log(findIndexOfArrayElement(arr,6));