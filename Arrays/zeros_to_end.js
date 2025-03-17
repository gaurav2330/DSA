const moveZerosToEnd = (arr) => {
  let index = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
      index += 1;
    }
  }
  return arr;
}

let arr = [8, 5, 0, 10, 0, 20]
console.log(moveZerosToEnd(arr))

arr = [0, 0, 0, 10, 0]
console.log(moveZerosToEnd(arr))

arr = [10, 20];
console.log(moveZerosToEnd(arr))
