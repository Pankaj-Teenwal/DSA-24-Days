/**
 * @des
 */



const reverseString = (str)=>{
    str = str.split("");

    let result=[];

    for(let i= str.length-1; i>=0; i--){
        result.push(str[i]);
    }
    return result;
}


let str = 'pankaj kumar mdw 1998 @ gmail.com';

console.log(reverseString(str));

//method 2 by swapping of elements.


const reverseStringMethod = (str)=>{
    str = str.split("");
    let firstElem = str[0];
    let lastElem = str[str.length-1];
    while(lastElem>firstElem){
        let temp = firstElem;
        firstElem = lastElem;
        lastElem = temp;
    }
    return str;
}

let str1 = 'pankaj kumar mdw 1998 @ gmail.com';


//console.log(reverseStringMethod(str1));