const upperCaseFirstLetter = (str) => {
    str = str.split(" ")

    let resultStr = "";
    let firstLetters = [];
    let lastLetters = [];

    for (let i = 0; i < str.length; i++) {
        firstLetters.push(str[i][0].toUpperCase())
        
    }

    for(let i=0; i<str.length;i++){
        lastLetters.push(str[i].toLowerCase().slice(1,str[i].length))
    }


    for(let i=0; i<str.length; i++){
        resultStr = resultStr+firstLetters[i]+lastLetters[i]+" ";
    }

    return resultStr;
}



let str = "hII bUDDY hOW aRE yOU"

console.log(upperCaseFirstLetter(str))