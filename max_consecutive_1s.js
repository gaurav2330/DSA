const maxConsecutive1s = (arr) => {
  let max = 0, count = 0
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count ++;
      max = Math.max(count, max);
    }
    else {
      count = 0;
    }
  }

  return max;
}


let arr = [0, 1, 1, 0, 1, 0]
console.log(maxConsecutive1s(arr))

arr = [1, 1, 1, 1]
console.log(maxConsecutive1s(arr))

arr = [0, 0, 0]
console.log(maxConsecutive1s(arr))

arr = [1, 0, 1, 1, 1, 1, 0, 1, 1]
console.log(maxConsecutive1s(arr))
