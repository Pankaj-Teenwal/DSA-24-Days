/**
 * @description To find character occurance from the string.
 * 
 * 
 * will create a empty object tha set the string to the object in the form of keys and values pair, by doing this we will get each characters count.
 * 
 * 
 */


const findCharacterOccurance = (str)=>{

    let regx = /\s/g;

    str = str.replace(regx, "")
    let resultObj = {};


    for(let i=0; i<str.length;i++){
        if(resultObj.hasOwnProperty(str[i])){
            resultObj[str[i]] = resultObj[str[i]]+1;
        }

        else{
            resultObj[str[i]]=1;
        }
    }

    return resultObj;
}

const str = 'Hii buddy how are you';

console.log(findCharacterOccurance(str));