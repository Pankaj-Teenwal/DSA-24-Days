/**
 * 
 * String reverse with reverseing of individual words
 */

    const reverseString = (str)=>{
        str = str.split("");
        console.log(str)
        let resultStr = "";

        for(let i = str.length-1; i>=0;i--){
            resultStr = resultStr+str[i]
        }

        return resultStr;
    }




let str = 'pankaj';

console.log(reverseString(str));




