// input:- "BBABBBAACAAAB"
// output:- "2B1A3B2A1C3A1B"

//input:- "AAAaBBBCCAA"
//output:- "4A3B2C2A"
/**
 * @description 
 * step-1: convert all the characters to uppercase
 * step-2: will create a empty object.
 * step-3: will create a empty string.
 * step-4: will loop the string and check that i and i+1 i equal then will set those keys in object.
 * step-5: if they are not equal then we will concate the keys and their values and then we will delete that key form object.
 */



const frequencyCount = (str) => {

    let result = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        }
        else {
            result = result + count + str[i - 1]
            count = 1;
        }
    }
    return result;

}

let str = "aabbab"

console.log(frequencyCount(str));
