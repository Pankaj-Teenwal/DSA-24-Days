/**
 * @description Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 */

const containsDuplicate = (arr) => {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        // if (obj.hasOwnProperty(arr[i])) {
        //     obj[arr[i]] = obj[arr[i]] + 1;
        // }
        // else {
        //     obj[arr[i]] = 1;
        // }

        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }

    console.log("object", obj);

    let values = Object.values(obj);
    console.log("Object Values", values)
    let counter = 0
    for (let i = 0; i < values.length; i++) {
        counter = counter + values[i];
        // if (values[i] === 2) {
        //     return true;
        // }
    }

    // if (counter == values.length) {
    //     return false;
    // }
    return counter == values.length ? false : true


}

const arr = [1, 2, 3, 4];

console.log(containsDuplicate(arr));