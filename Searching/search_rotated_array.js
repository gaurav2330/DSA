const searchRotatedArray = (arr, x) => {
  let start = 0, end = arr.length - 1, mid;

  while(start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] == x) {
      return mid;
    }
    
    if (arr[start] <= arr[mid]) {
      if (x >= arr[start] && x < arr[mid]) {
        end = mid - 1;
      }
      else start = mid + 1;
    }
    else {
      if (x > arr[mid] && x <= arr[end]) {
        start = mid + 1;
      }
      else end = mid - 1;
    }
  }
  return -1;
}

let arr = [100, 200, 400, 1000, 10, 20]
console.log(searchRotatedArray(arr, 15))
console.log(searchRotatedArray(arr, 10))
