// const maxSumSubarray = (arr) => {
//   let sum = arr[0];
  
//   for(let i = 0; i < arr.length; i++) {
//     let temp_sum = 0;
//     for(let j = i; j < arr.length; j++) {
//       temp_sum += arr[j];
//       sum = Math.max(sum, temp_sum)
//     }
//   }
//   return sum;
// }

// Naive solution. Time complexity - O(n^2)

// ***************************************************************************************************

const maxSumSubarray = (arr) => {
  let maxArr = new Array(arr.length)
  maxArr[0] = arr[0]
  let res = maxArr[0];
  
  for(let i = 1; i < arr.length; i++) {
    maxArr[i] = Math.max(arr[i], maxArr[i - 1] + arr[i])
    res = Math.max(res, maxArr[i])

  }
  return res;
}


let arr = [2, 3, -8, 7, -1, 2, 3]
console.log(maxSumSubarray(arr))

arr = [5, 8, 3]
console.log(maxSumSubarray(arr))

arr = [-6, -1, -8]
console.log(maxSumSubarray(arr))

