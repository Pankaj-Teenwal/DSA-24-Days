const findMissingNumber = (arr) => {

    // ap sum = n(2a+(n-1)d)
    //wherre a = minimum element
    //d = diff
    // n = lastElem - firstElem+1

    
    let firstElem = arr[0];
    let lastElem = arr[0];
    let d = 1;


    for (let i = 1; i < arr.length; i++) {
        if (firstElem > arr[i]) {
            firstElem = arr[i]
        }
        if (lastElem < arr[i]) {
            lastElem = arr[i]
        }
    }

    const n = lastElem - firstElem + 1;
    let sum = (n*(2 * firstElem + (n - 1) * d))/2


    console.log(lastElem)

    console.log(firstElem);

    console.log("sum",sum);

    let arraySum = 0;
    for(let i=0; i<arr.length;i++){
        arraySum = arraySum+arr[i]
    }

    console.log("arraySum",arraySum);

    return sum-arraySum;
}

let arr = [1, 2];

console.log(findMissingNumber(arr));