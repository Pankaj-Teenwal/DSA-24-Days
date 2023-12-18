/**
 * @description to find a first pair from a number array whose sum is zero
 * 
 * 
 */
// const firstPairWhoseSumIsZero = (str)=>{

//     for(let i=0;i<str.length;i++){
//         for(let j=0; j<str.length;j++){
//             if(str[i]+str[j]==0){
//                 return `${str[i]} and ${str[j]}`
//             }
//         }
//     }
// }

// const firstPairWhoseSumIsZero = (str)=>{
//     for(let i=0; i<str.length;i++){
//         if(str.includes(-str[i])){
//             return `pair whose sum is zero are ${str[i]} and ${-str[i]}`
//         }
//     }
//     return 0;
// }


// const firstPairWhoseSumIsZero = (str)=>{
//     let mapping = {}
//     for(let i=0;i<str.length;i++){
//         if(mapping.hasOwnProperty(str[i])){
//             mapping[str[i]] = mapping[str[i]]+1;
//         }
//         else{
//             mapping[str[i]] = 1;
//         }
//     }

//     for(let item in mapping){
//         if(str.includes(-item)){
//             return `pair is ${item} & ${-item}`
//         }
//     }
// }

// let str = [1,4,3,6,7,-2,-3];

// console.log(firstPairWhoseSumIsZero(str))



const firstPairWhoseSumIsZero = (str) => {
    let mapping = {};

    for (let i = 0; i < str.length; i++) {
        let key = str[i];
        if (key == 0) continue
        if (mapping.hasOwnProperty(-key)) {
            return [key, -key]
        }
        else {
            mapping[key] = 1
        }
    }

    return "No such pair exists"
}

let str = [2, -2, 3, -3, 4, -4];
console.log(firstPairWhoseSumIsZero(str))