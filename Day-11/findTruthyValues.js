
const findTruthyValues = (arr)=>{
    let resultArr = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            resultArr.push(arr[i])
        }
    }
    return resultArr;
}


const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];

console.log(findTruthyValues(input))