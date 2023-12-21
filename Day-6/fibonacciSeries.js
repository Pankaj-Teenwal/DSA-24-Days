const fibonacciSeries = (num)=>{

    let t1 = 0
    let t2 = 1;
    let nextTerm = 0;

    while(nextTerm<=num){
        console.log(nextTerm,);
        t1 = t2;
        t2 = nextTerm;
        nextTerm = t1+t2;
    }

    return 0;

    
}

fibonacciSeries(10)