/**
 * @description check if a string is an anagram or not.
 * annagram is if two string have same characters wether they have different order
 * approach 1- check that second string inclues every elements of the string 1.
 */

// const checkAnnagram = (str1, str2)=>{
//     if(!(str1.length === str2.length)){
//         return "Not a annagram";
//     }
//     let charMapping = {};
//     for(let item of str1){
//         if(charMapping.hasOwnProperty(item)){
//             charMapping[item] = charMapping[item]+1;
//         }
//         else{
//             charMapping[item] = 1
//         }
//     }

//     for(let char of str2){
//         if(!charMapping[char]){
//             return false;
//         }

//         charMapping[char]--;
//     }

//     return true;



// }



const checkAnnagram = (str1, str2)=>{
    let resultStr1 = str1.split("").sort().join("")
    let resultStr2 = str2.split("").sort().join("")
    return resultStr1 === resultStr2
}


str1='racecar';
str2='carrace';
console.log(checkAnnagram(str1, str2));