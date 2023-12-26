const findTruthyValuesByFilter = (arr) => {
    let resultArr = arr.filter((item) => {
        if (item) {
            return item;
        }
    })
    return resultArr
}


const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];

console.log(findTruthyValuesByFilter(input))

