const binarySearch = (arr, x) => {
  let start = 0, end = arr.length;

  while (start < end) {
    mid = Math.floor((start + end)/2)
    if (arr[mid] > x) {
      end = mid - 1;
    }
    else if (arr[mid] < x) {
      start = mid + 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}

let arr = [10, 20, 30, 40, 50, 60]
console.log(binarySearch(arr, 20))

arr = [5, 15, 25]
console.log(binarySearch(arr, 25))

arr = [5, 10, 15, 25, 35]
console.log(binarySearch(arr, 20))

arr = [10, 15]
console.log(binarySearch(arr, 20))

arr = [10, 15]
console.log(binarySearch(arr, 5))

arr = [10, 10]
console.log(binarySearch(arr, 10))