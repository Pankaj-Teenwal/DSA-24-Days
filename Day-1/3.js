/**
 * @description Remove Duplicate characters from array of element using filter.
 * i/p:- pankaj
 * o/p:-pankj
 */


const removeDuplicate =(arr)=>{

    let resultArr = [];

    arr.filter((item)=>{
        if(!resultArr.includes(item)){
            resultArr.push(item)
        }
    })

    return resultArr;
}

const arr = ['p', 'a', 'n', 'k', 'a', 'j', 'k', 'u', 'm', 'a', 'r', 'm', 'd', 'w', '1', '9', '9', '8'];
console.log(removeDuplicate(arr));
