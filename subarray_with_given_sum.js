const subArrayWithGivenSum = (arr, reqSum) => {
  let sum = 0, start = 0;

  for(let end = 0; end < arr.length; end++) {
    sum += arr[end]
    while (sum > reqSum) {
      sum -= arr[start]
      start++;
    }
    if (sum == reqSum) {
      return true;
    }
  }
  return false;
}

let arr = [1, 4, 20, 3, 10, 5]
console.log(subArrayWithGivenSum(arr, 33))

arr = [1, 4, 0, 0, 3, 10, 5]
console.log(subArrayWithGivenSum(arr, 7))

arr = [2, 4]
console.log(subArrayWithGivenSum(arr, 9))
