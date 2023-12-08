/**
 * @description To find character occurance from the string.
 */

const tofindCharacterOccurance = (str) => {
    str = str.toLowerCase()
    let regx = /\s/g;

    str = str.replace(regx,"")
    console.log("string after lowercase and lowercased",str);

    let resultObj = {}
    for (let i = 0; i < str.length; i++) {
        if (resultObj.hasOwnProperty(str[i])) {
            resultObj[str[i]] = resultObj[str[i]] + 1
        }
        else {
            resultObj[str[i]] = 1
        }
    }

    console.log(resultObj)
}
let str = 'Hii buddy how are you';
console.log(tofindCharacterOccurance(str));