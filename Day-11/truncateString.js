const truncateString = (str, n) => {
    let resultStr = "";

    for (let i = 0; i <=n; i++) {
        resultStr = resultStr + str[i]
    }

    console.log(resultStr+"...")
}

let str = "I am Priya"

console.log(truncateString(str, 3))