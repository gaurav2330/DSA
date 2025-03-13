const maxEvenOddSubarray = (arr) => {
  let len = 1, maxLen = 1, flag = Infinity;
  for(let i = 1; i < arr.length; i++) {
    if ((arr[i] % 2 == 0 && arr[i-1] % 2 != 0) || (arr[i] % 2 != 0 && arr[i-1] % 2 == 0)) {
      len++;
      maxLen = Math.max(maxLen, len)

    }
    else {
      len = 1;
    }
  }
  return maxLen;
}


let arr = [10, 12, 14, 7, 8]
console.log(maxEvenOddSubarray(arr))

arr = [7, 10, 13, 14]
console.log(maxEvenOddSubarray(arr))

arr = [10, 12, 8, 4]
console.log(maxEvenOddSubarray(arr))

