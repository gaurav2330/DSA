// const maxDifference = (arr) => {
//   let maxDiff = -Infinity;
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//       if (arr[j] - arr[i] > maxDiff) maxDiff = arr[j] - arr[i];
//     }
//   }
//   return maxDiff
// }
// Naive solution. Time complexity - O(n^2)

// ******************************************************************************************************

const maxDifference = (arr) => {
  let max = arr[arr.length - 1];
  let maxDiff = -Infinity;
  for(let i = arr.length - 2; i >= 0; i--) {
    maxDiff = Math.max((max - arr[i]), maxDiff)
    if (arr[i] > max) max = arr[i];
  }
  return maxDiff
}


let arr = [2, 3, 10, 6, 4, 8, 1]
console.log(maxDifference(arr))

arr = [7, 9, 5, 6, 3, 2]
console.log(maxDifference(arr))