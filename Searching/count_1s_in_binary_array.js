const firstOccurence = (arr) => {
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end)/2)
    if (arr[mid] > 1) {
      end = mid - 1;
    }
    else if (arr[mid] < 1) {
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

const count1s = (arr) => {
  let first = firstOccurence(arr)
  if (first == -1) return 0;

  return arr.length - first;
}

let arr = [0, 0 , 0, 1, 1, 1, 1]
console.log(count1s(arr, 15))

arr = [1, 1, 1, 1, 1]
console.log(count1s(arr, 20))

arr = [0, 0, 0, 0]
console.log(count1s(arr, 5))
