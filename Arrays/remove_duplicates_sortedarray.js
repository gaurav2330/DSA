const removeDuplicatesFromSortedArray = (arr) => {
  let index = 0;

  for(let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[index]) {
      index += 1;
      arr[index] = arr[i];
    }
  }

  for(let i = index + 1; i < arr.length; i++) {
    arr[i] = null
  }
  return arr;
}

let arr = [10, 20, 20, 30, 30, 30, 30]
console.log(removeDuplicatesFromSortedArray(arr));

arr = [10, 10, 10]
console.log(removeDuplicatesFromSortedArray(arr));