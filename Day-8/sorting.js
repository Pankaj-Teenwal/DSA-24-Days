const sortingOfStringCharacter = (str)=>{
    str = str.split("")
    
    for(let i=0; i<str.length;i++){
        for(let j=0; j<str.length-1-i; j++){
            if(str[j]>str[j+1]){
                let temp = str[j];
                str[j] = str[j+1];
                str[j+1] = temp;
            }
        }
    }
    return str.join("");
}

let str = "btoejasjdfhdkf";

console.log(sortingOfStringCharacter(str))