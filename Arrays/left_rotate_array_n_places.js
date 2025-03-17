// const leftRotate = (arr, n) => {
//   while (n > 0) {
//     let item = arr[0];
    
//     for(let i =0; i < arr.length; i++) {
//       arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] = item;
//     n--;
//   }
//   return arr;
// }

// Naive solution. Time complexity Theta(n*arrlength)

// ************************************************************************************************************
// const leftRotate = (arr, n) => {
//   let items = []
//   for(let i = 0; i < n; i++) {
//     items.push(arr[i])
//   }
//   for(let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i+n]
//   }
//   for(let i = arr.length-1; i >= arr.length-n; i--) {
//     arr[i] = items.pop()
//   }
//   return arr;
// }

//  Solution with time complexity - Theta(n) and space complexity - Theta(d)

// ************************************************************************************************************

const leftRotate = (arr, n) => {
  reverse(arr, 0, n-1);
  reverse(arr, n, arr.length-1)
  reverse(arr, 0 , arr.length-1)
  return arr;
}

const reverse = (arr, start, end) => {
  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++;
    end--;
  }
}

let arr = [8, 5, 0, 10, 0, 20]
console.log(leftRotate(arr, 2)) // [ 0, 10, 0, 20, 8, 5 ]

arr = [10, 5, 30, 15]
console.log(leftRotate(arr, 3)) // [ 15, 10, 5, 30 ]

//  Solution with time complexity - Theta(n) 