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
    str = str.split("");

    let vowelCounter = 0;
    let vowelArray = [];

    for(let i=0; i<str.length;i++){

        if(vowelArray.includes(str[i])){
            vowelCounter++;
            continue;
        }
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
            vowelArray.push(str[i]);
            vowelCounter ++;
        }
    }
    return `vowels are ${vowelArray} and the number of the vowel are ${vowelCounter}`
}

let input = "subhama"

console.log(findVowelsCounter(input));