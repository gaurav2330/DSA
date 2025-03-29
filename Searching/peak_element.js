'use strict'

const peakElement = (arr) => {
  let n = arr.length;
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if ((mid == 0 && arr[mid+1] <= arr[mid]) || (mid == n-1 && arr[mid - 1] <= arr[mid])) {
      return mid;
    }

    if (mid > 0 && arr[mid - 1] >= arr[mid]) {
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }
  return -1;
}

let arr = [5, 10, 10, 15, 15]
console.log(peakElement(arr))

arr = [5, 10, 10, 15, 12, 20, 20]
console.log(peakElement(arr))

arr = [5, 5, 5]
console.log(peakElement(arr  ))
