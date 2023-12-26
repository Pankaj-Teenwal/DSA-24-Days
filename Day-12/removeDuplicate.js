const removeDuplicate = (arr)=>{
    let set = new Set(arr);

    return set.keys()
    
}




const arr = [1, 2, 3, 4, 5,3,2,6,8,1,5,7,9,6, 8, 7, 6, 4, 3, 8];
console.log(removeDuplicate(arr))