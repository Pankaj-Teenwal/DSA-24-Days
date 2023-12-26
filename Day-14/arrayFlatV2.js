const flatArray = (arr)=>{
    let Arr = arr.reduce((accumulator, currentValue)=>{

        if(Array.isArray(currentValue)){
           return accumulator.concat(flatArray(currentValue))
        }
        else{
            return accumulator.concat(currentValue)
        }

    },[])

    return Arr
}



const num = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10], [1521,234,656,534,5,5345,34523,[1,2]]]

console.log(flatArray(num))