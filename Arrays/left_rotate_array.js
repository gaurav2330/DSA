const leftRotate = (arr) => {
  let item = arr[0];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }
  arr[arr.length - 1] = item;
  return arr;
}


let arr = [8, 5, 0, 10, 0, 20]
console.log(leftRotate(arr))

arr = [30, 5, 20]
console.log(leftRotate(arr))