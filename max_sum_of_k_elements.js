const maxSumOfKElements = (arr, k) => {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i]
  }

  let currSum = sum;

  for(let i = k; i < arr.length; i++) {
    currSum += arr[i];
    currSum -= arr[i - k]
    sum = Math.max(currSum, sum)
  }

  return sum
}

let arr = [1, 8, 30, -5, 20, 7]
console.log(maxSumOfKElements(arr, 3))

arr = [5, -10, 6, 90, 3]
console.log(maxSumOfKElements(arr, 2))
