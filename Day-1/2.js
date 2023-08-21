/**
 * @description Q. Remove Duplicate characters from array of element and find the count of an elements using set.
 * 
 * step-1: we can convert the string input to set and then we simply return the number of elements of the set.
 
 */






const removeDuplicates = (str)=>{
    let set;
    return (set = new Set(str).size);

}

console.log(removeDuplicates("pankajAPNK1223554SqUErtesop1273"))