const binarySearch = (arr, start, end, x) => {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2)

  if (arr[mid] == x) {
    return mid;
  }
  else if (arr[mid] < x) {
    return binarySearch(arr, mid + 1, end, x)
  }
  else if (arr[mid] > x) {
    return binarySearch(arr, start, mid - 1, x)
  }
}

let arr = [10, 20, 30, 40, 50, 60]
console.log(binarySearch(arr, 0, arr.length - 1, 20)) // 1

arr = [5, 15, 25]
console.log(binarySearch(arr, 0, arr.length - 1, 25)) // 2

arr = [5, 10, 15, 25, 35]
console.log(binarySearch(arr, 0, arr.length - 1, 20)) // -1

arr = [10, 15]
console.log(binarySearch(arr, 0, arr.length - 1, 20)) // -1

arr = [10, 15]
console.log(binarySearch(arr, 0, arr.length - 1, 5)) // -1

arr = [10, 10]
console.log(binarySearch(arr, 0, arr.length - 1, 10)) // 0 or 1