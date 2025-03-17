const trapRainwater = (arr) => {
  let maxLeft = new Array(arr.length);
  maxLeft[0] = arr[0]
  for(let i = 1; i < arr.length; i++) {
    maxLeft[i] = Math.max(arr[i], maxLeft[i-1] || 0)
  }

  let maxRight = new Array(arr.length);
  maxRight[arr.length - 1] = arr[arr.length-1]
  for(let i = arr.length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(arr[i], maxRight[i+1] || 0)
  }

  let max = 0;

  for(let i = 1; i < arr.length - 1; i++) {
    max += Math.min(maxLeft[i], maxRight[i]) - arr[i]
  }
  return max;
}


let arr = [2,0,2]
console.log(trapRainwater(arr))

arr = [3, 0, 1, 2, 5]
console.log(trapRainwater(arr))

arr = [3, 5, 2, 3]
console.log(trapRainwater(arr))

arr = [5, 0, 6, 2, 3]
console.log(trapRainwater(arr))
