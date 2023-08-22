/**
 *Q. Find Factorial of a given number
 */




const findFectorial = (num)=>{
    if(num===0){return 1;}
    BigInt= fectorial = 1;
    for(let i=1;i<=num; i++){
        fectorial = fectorial*i; 
    }
    return fectorial;
}

console.log(findFectorial(23));