const firstOccurence = (arr, x) => {
  let start = 0, end = arr.length - 1;
  
  while (start <= end) {
    let mid = Math.floor((start + end)/2)
    if (arr[mid] > x) {
      end = mid - 1;
    }
    else if (arr[mid] < x) {
      start = mid + 1;
    }
    else {
      if (arr[mid] == arr[mid - 1]) {
        end = mid - 1;
      }
      else return mid;
    }
  }
  return -1;
}

let arr = [5, 10, 10, 15, 15]
console.log(firstOccurence(arr, 15))

arr = [5, 10, 10, 15, 20, 20, 20]
console.log(firstOccurence(arr, 20))

arr = [5, 5, 5]
console.log(firstOccurence(arr, 5))
