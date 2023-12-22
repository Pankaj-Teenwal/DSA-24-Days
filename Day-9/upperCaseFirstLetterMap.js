const upperCaseFirstLetter = (str)=>{
    str = str.split(" ")
    console.log(str);

    let resultArr = str.map((item)=>{
        let firstLetter = item.slice(0,1).toUpperCase();
        let lastLetter = item.slice(1,item.length).toLowerCase()

        return `${firstLetter+lastLetter+" "}`
    })

    return resultArr.join("")
}

let str = "hII bUDDY hOW aRE yOU"

console.log(upperCaseFirstLetter(str))