const prefixSum = (arr) => {
  let sumArr = [arr[0]]

  for(let i = 1; i < arr.length; i++) {
    sumArr[i] = sumArr[i-1] + arr[i];
  }
  return sumArr;
}

const getSum = (arr, start, end) => {
  return arr[end] - (arr[start - 1] || 0);
}

let arr = [2, 8, 3, 9, 6, 5, 4]
prefiXSumArr = prefixSum(arr)

console.log(getSum(prefiXSumArr, 0, 2))

console.log(getSum(prefiXSumArr, 1, 3))

console.log(getSum(prefiXSumArr, 2, 6))
