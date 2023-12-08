/**
 * @description Q. To find vowels and its count in a given string.
 * 
 * step-1: first we convert the string into array of characters.
 * step-2: we itrate over the array and check that the current element is vowels or not.
 * step-3: if its a vowel then we simply push that vowel inside empty array. 
 * step-4: and we create a counter that trackes the number of vowels
 * step-5: then in the next iteration if we found the same vovels then we dont push that inside the array, we simply increase the counter by one. 

 */



const findVowelsCounter = (str)=>{
    str = str.toLowerCase().split("");

    let resultObj = {};
    console.log(str)
    for(let i=0;i<str.length;i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='i'||str[i]==='o' ||str[i]==='u'){
            if(resultObj.hasOwnProperty(str[i])){
                resultObj[str[i]] = resultObj[str[i]]+1
            }
            else{
                resultObj[str[i]] = 1
            }
        }
    }
    
    return resultObj;
}
let input = "Hii subhama how are you"

console.log(findVowelsCounter(input));