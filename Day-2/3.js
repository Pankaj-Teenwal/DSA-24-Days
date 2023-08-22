/**
 * @description check if a string is an anagram or not.
 * annagram is if two string have same characters wether they have different order
 * approach 1- check that second string inclues every elements of the string 1.
 */

const checkAnnagram = (str1, str2)=>{
    if(!(str1.length === str2.length)){
        return "Not a annagram";
    }
    str1 = str1.split("");
    str2 = str2.split("");
    for(let i=0; i<str1.length; i++){
        if(!(str2.includes(str1[i])))
        {
            return false;
        }
        return true;
    }
}

str1='racecar';
str2='carrace';
console.log(checkAnnagram(str1, str2));