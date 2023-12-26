/**
 * @description const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 9],
  [45, 76, 2, 1],
  [89, 90, 87, 9],
];

// Output
[4, 9, 76, 90];
 */

const findLargestElement = (inputArr) => {
    let resultArr = [];
    let maxElem = 0;
    for (let i = 0; i < inputArr.length; i++) {
        let item = inputArr[i]
        maxElem = item[0];
        for (let j = 0; j < item.length; j++) {
            if (maxElem < item[j]) {
                maxElem = item[j]
            }

        }

        resultArr.push(maxElem);

    }

    return resultArr;
}

const inputArr = [
    [1, 2, 3, 4],
    [5, 6, 7, 9],
    [45, 76, 2, 1],
    [89, 90, 87, 9]
]

console.log(findLargestElement(inputArr))
