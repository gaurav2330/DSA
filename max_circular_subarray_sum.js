const maxCircularSubarraySum = (arr) => {
  let maxSum = arr[0];
  let maxArr = [arr[0]]
  for(let i = 1; i < arr.length; i++) {
    maxArr[i] = Math.max(arr[i], maxArr[i - 1] + arr[i])
    maxSum = Math.max(maxSum, maxArr[i])
  }

  let minSum = arr[0]
  let minArr = [arr[0]]
  let arrSum = arr[0]
  for(let i = 1; i < arr.length; i++) {
    arrSum += arr[i];
    minArr[i] = Math.min(arr[i], minArr[i - 1] + arr[i])
    minSum = Math.min(minSum, minArr[i])
  }
  let circularSum = arrSum - minSum;
  return Math.max(maxSum, circularSum)
}

// 1. The trick here is that you first find the maxsubarray sum for non-circular subarray.
// 2. Then find the minSubArraysum for non-circular subarray and also compute the sum of the entire array.
// 3. The entire solution is based on the fact that when we subtract the minSubarraysum from entire array sum, it will give you the max circular subarray sum.
// 4. Then we just find the max between maxsubarraysum for normal subarray and maxsubarraysum for circular sum.


let arr = [5, -2, 3, 4] 
console.log(maxCircularSubarraySum(arr)) // 12

arr = [2, 3, -4]
console.log(maxCircularSubarraySum(arr)) // 5

arr = [8, -4, 3, -5, 4]
console.log(maxCircularSubarraySum(arr)) // 12

arr = [-3, 4, 6, -2]
console.log(maxCircularSubarraySum(arr)) // 10

