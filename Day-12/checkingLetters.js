const checkingAllLetters =(str1, str2)=>{
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    if(str1.length != str2.length){
        return false;
    }
    let index = 0;
    
    for(item of str1){
        if(item != str2[index]){
            return false
        }
        index++
    }

    return true;
}

let str1 = "pankak";
let str2 = "PaNkAj"

console.log(checkingAllLetters(str1, str2))