const stringReverse = (str)=>{
    let result = ""
    for(let i=str.length-1; i>=0;i--){
        result=result+str[i];
    }

    return result;
}



let str = "pankaj";

stringReverse(str);