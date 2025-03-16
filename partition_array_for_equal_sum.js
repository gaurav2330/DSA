const partitionArr = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (sum % 3 != 0) return false;

  let partitionCount = 0, remSum = sum / 3;

  for (let i = 0; i < arr.length; i++) {
    remSum -= arr[i];

    if (remSum == 0) {
      partitionCount++;
      remSum = sum / 3;
    }
    else if (remSum < 0) return false;
  }

  if (partitionCount == 3) return true;
}

// Given an array, chekc if it can be partitioned into three different parts with equal sum
let arr = [5, 2, 6 , 1, 1, 1, 1, 4]
console.log(partitionArr(arr))

arr = [3, 2, 5, 1, 1, 5]
console.log(partitionArr(arr))
