
const sum = (...args)=>{
    let result = 0;
    for(let i=0; i<args.length;i++){
        result = result+args[i]
    }
    return result;
}
console.log(sum(10,15,20,30))