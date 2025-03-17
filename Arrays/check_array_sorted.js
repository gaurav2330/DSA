const checkArraySorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] < arr[i]) {
      return false;
    }
  }
  return true;
}


let arr = [8, 12, 15]
console.log(checkArraySorted(arr))

arr = [8, 10, 10, 12]
console.log(checkArraySorted(arr))

arr = [100]
console.log(checkArraySorted(arr))

arr = [100, 20, 200]
console.log(checkArraySorted(arr))