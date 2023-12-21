const fibonacciArray = (nums)=>{

    let t1 = 0;
    let t2 = 1;
    let nextTerm = 0;
    let resultArr = []

    while(nextTerm<=nums){
        resultArr.push(nextTerm);
        t1=t2;
        t2 = nextTerm;
        nextTerm = t1+t2
    }


    console.log(resultArr)

}

console.log(fibonacciArray(1000000000000))