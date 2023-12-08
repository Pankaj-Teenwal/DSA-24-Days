const findAnnagram = (str1,str2) =>{
    if(str1.length!=str2.length){
        return false;
    }
    let str = str1+str2;
    let obj = {};
    for(let i=0; i<str.length;i++){
        if(obj.hasOwnProperty(str[i])){
            delete obj[str[i]]  
        }
        else{
            obj[str[i]] = 1
        }
    }
    console.log(obj)
    if(Object.keys(obj).length!=0){
        return false;
    }
    else{
        return true;
    }
}





let str1 = "listen"
let str2 = "silent"

console.log(findAnnagram(str1, str2));