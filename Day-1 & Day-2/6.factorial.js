const findFactorial = (num)=>{
    if(num == 1 || num==0){
        return 1
    }

    let fact = 1;

    for(let i=1; i<=num;i++){
        fact=fact*i;
    }

    return fact
}

console.log(findFactorial(5))