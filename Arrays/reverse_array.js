const reverseArray = (arr) => {
  // return arr.reverse()

  const length = arr.length;
  for(let i = 0; i < Math.floor(arr.length/2); i++ ) {
    [arr[i], arr[length - 1 - i]] = [arr[length - 1 -i], arr[i]]
  }
  return arr;
}

let arr = [8, 12, 15]
console.log(reverseArray(arr))

arr = [8, 10, 10, 12]
console.log(reverseArray(arr))

arr = [100]
console.log(reverseArray(arr))

arr = [100, 20, 200]
console.log(reverseArray(arr))