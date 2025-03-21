const search = (arr, x) => {
  let start = 0, end = -1;

  if (arr[start] < x) {
    start *= 2
  }
  else if (arr[start] > x) {
    end = start
  }
  return -1;
}

let arr = [1, 10, 15, 20, 40, 80, 90, 100, 120, 150, 200, 210, 230]
console.log(search(arr, 100)) //7

arr = [20, 40, 100, 300, 400, 600, 700, 900]
console.log(search(arr, 20)) // -1
