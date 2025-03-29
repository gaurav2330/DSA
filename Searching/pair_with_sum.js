'use strict'

const isPair = (arr, x) => {
  let start = 0, end = arr.length -1;

  while (start < end) {
    let sum = arr[start] + arr[end]
    if (sum == x) {
      return true;
    }
    else if (sum > x) {
      end -= 1;
    }
    else {
      start += 1;
    }
  }


  return -1;
}

let arr = [2, 5, 8, 12, 30]
console.log(isPair(arr, 17))
