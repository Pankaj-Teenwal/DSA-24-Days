/**
 *Q. Find Factorial of a given number
 */




const findFactorial = (num)=>{

    if(num === 0){
        return 1;
    }

    let factorial = 1;

    for(let i=1; i<=num; i++){
        factorial = factorial*i
    }
    return factorial
}

console.log(findFactorial(12));