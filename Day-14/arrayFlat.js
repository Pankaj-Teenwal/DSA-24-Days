const num = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10], [1521,234,656,534,5,5345,34523,[1,2]]]

// let flatNums = num.reduce((accumulator, currentValue)=>{
//     accumulator.concat(currentValue.reduce((a,c)=>a.concat(c),[]))
// }, [])

// console.log(flatNums)


// let flatNums = num.reduce((accumulator, currremtValue) => {
//     if(Array.isArray(currremtValue)){
//         return accumulator.concat(currremtValue.reduce((a,c)=>{
//             return a.concat(c)
//         },[]))
//     }
//      else{
//         return accumulator.concat(currremtValue)
//      }
// }, [])

// console.log(flatNums)

let flatNums = num.reduce((accumulator, currentValue)=>{
    if(Array.isArray(currentValue)){
        return accumulator.concat(currentValue.reduce((a,c)=>{
            return a.concat(c)
        },[]))
    }
    else{
        return accumulator.concat(currentValue)
    }
},[])

console.log(flatNums)