const checkPrimeNumber = (num)=>{

    for(let i=2; i<=num-1; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;

}

let num = 23;
console.log(checkPrimeNumber(num))