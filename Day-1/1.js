// /**
//  * @description Q.Remove Duplicate characters from String.
//  * Algo:-1
//  * step:1 we create a new empty array.
//  * step:2 Then we can compare every string element to the empty array, if the array contains the string element then we simply skip that, if no then we simply push that elemtnt to the array, by doing that we will hava a array that have unique elements
 
//  */

//     let removeDuplicate = (str)=>{

//         str = str.split("");

//         let arr= [];
    
//         for(let i=0; i<str.length;i++)
//         {
//             if(!arr.includes(str[i])){
//                 arr.push(str[i]);
//             }
//         }
//         return arr;
//     }




// let str = "subham2385pankajAajJpPaN";

// console.log(removeDuplicate(str));



// /**
//  * @description
//  * step:1 we change array to string.
//  * step:2 then we can create a loop, to compare every element of the array with every element of the array element.
//  * step:3 if the element matches then we simply remove that element form the array, if it dont maches then we simply skip the step.
//  */

// let removeDuplicates = (str)=>{
//     str = str.split("");
//     for(let i=0; i<str.length;i++){
//         for(let j= i+1; j<str.length; j++ ){
//             if(str[i]==str[j]){
//                 str.splice(j,1);
//             }
//           }
//     }
//     return str;
// }
// let input = "adkgthahtpankajkumarmdw1998A";
// console.log(removeDuplicates(input));

/**
 * Removing Duplicate Characters form String.
 * 
 * step-1 convert the string into the object.
 * step-2 then we can get all the keys of the object and we have the array of charcters that has unique key only.
 * 
 * 
 */

const removeDuplicates=(str)=>{
    let resultObj = {};

    for(item of str){
        if(resultObj.hasOwnProperty(item)){
            resultObj[item] = resultObj[item]+1
        }
        else{
            resultObj[item] = 1
        }
    }


    return Object.keys(resultObj).join("")
}



let str = "subham2385pankajAajJpPaN";
console.log(removeDuplicates(str))