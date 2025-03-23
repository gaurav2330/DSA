const search = (arr, x) => {
  if (arr[0] == x) return 0;
  let start = 1, end = -1, mid;

  while (end == -1) {
    if (arr[start] == x) {
      return start;
    }
    else if (arr[start] < x ) {
      start *= 2
    }
    else {
      end = start;
      start = Math.floor(start / 2)
    }
  }

  while (start < end) {
    mid = Math.floor((start + end)/ 2);

    if (arr[mid] == x) {
      return mid;
    }
    else if (arr[mid] < x) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }
  return -1;
}

let arr = [1, 10, 15, 20, 40, 80, 90, 100, 120, 150, 200, 210, 230]
console.log(search(arr, 100)) //7

arr = [20, 40, 100, 300, 400, 600, 700, 900]
console.log(search(arr, 50)) // -1
