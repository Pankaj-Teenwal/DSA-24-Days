/**
 * @decription Find Intersection of two arrays 
 */


const findIntersection = (arr1, arr2)=>{
    let mapping ={}
    let result = []
    for(let i=0; i<arr1.length;i++){
        if(mapping.hasOwnProperty(arr1[i])){
            mapping[arr1[i]] = mapping[arr1[i]]+1;
        }
        else{
            mapping[arr1[i]] = 1
        }
    }

    for(let i=0;i<arr2.length;i++){
        if(mapping.hasOwnProperty(arr2[i])){

            if(result[arr2[i]]){
                    
            }
            
            
        }
    }


    console.log(result);

   
    // return result;
    
}

let arr1= [10,5,34,7,6,2,3,7];
let arr2= [10,5,23,34,6,7,5,4,3,9,45,23];

console.log(findIntersection(arr1, arr2))