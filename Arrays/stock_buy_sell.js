// const maximizeProfit = (arr, start, end) => {
//   if (end <= start) {
//     return 0;
//   }

//   let profit = 0;

//   for(let i = start; i < end; i++) {
//     for(let j = i+1; j <= end; j++) {
//       if (arr[j] > arr[i]) {
//         let curr_profit = arr[j] - arr[i] + maximizeProfit(arr, start, i - 1) + maximizeProfit(arr, j + 1, end)
//         profit = Math.max(profit, curr_profit);
//       }
//     } 
//   }
//   return profit;
// }

// Naive solution

// *************************************************************************************************

const maximizeProfit = (arr) => {
  let profit = 0;
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i-1]) {
      profit += arr[i] - arr[i-1];
    }
  }
  return profit;
}

let arr = [1, 5, 3, 8, 12]
// console.log(maximizeProfit(arr, 0, 4))
console.log(maximizeProfit(arr))

arr = [30, 20, 10]
// console.log(maximizeProfit(arr, 0, 2))
console.log(maximizeProfit(arr))

arr = [10, 20, 30]
// console.log(maximizeProfit(arr, 0, 2))
console.log(maximizeProfit(arr))