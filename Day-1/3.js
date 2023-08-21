/**
 * @description Remove Duplicate characters from array of element using filter.
 * i/p:- pankaj
 * o/p:-pankj
 */

let array = ['p','a','n','k','j']

const output = array.filter((item)=>{
    if(!(output.includes(item))){
        return item;
    }
})