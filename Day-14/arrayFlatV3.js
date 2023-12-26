const flatArray =(arr)=>{

    let Arr = arr.reduce((accumalator, currentValue)=>{

        if(Array.isArray(currentValue)){
            let temp = flatArray(currentValue)
            return[...accumalator,...temp]
        }
        else{
            return [...accumalator, currentValue]
        }
    },[])
    return Arr;
}




const num = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10], [1521,234,656,534,5,5345,34523,[1,2,[3,4]]]]

console.log(flatArray(num))