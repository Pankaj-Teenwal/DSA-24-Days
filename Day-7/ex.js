let firstElem  = nums[0];
  let lastElem = nums[0];
  for(let i=1; i<nums.length;i++){
      if(firstElem> nums[i]){
          firstElem = nums[i];
      }
      if(lastElem<nums[i]){
          lastElem = nums[i];
      }
  }

  const n = nums.length+1;
  let d = 1;

  let sum = (n*(2*firstElem + (n-1) * d))/2

  let arraySum = 0;
  
  for(let i=0; i<nums.length;i++){
      arraySum = arraySum+nums[i];
  }

  return sum-arraySum;


let arr = [1, 2, 4,5,6, 3, 7, 8];

let tempArr = new Array(arr.length).fill(0);

console.log(tempArr)