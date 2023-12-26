let arr=[10,15,20,30];
let sum = arr.reduce((acc, currVal)=>{
    return acc+currVal
})

let avg = sum/arr.length

let product = arr.reduce((acc, currVal)=>{
    return acc*currVal
}, 1)
console.log("sum",sum)
console.log("product", product);
console.log("avg", avg)

