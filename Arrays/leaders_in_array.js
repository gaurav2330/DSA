const leadersInArray = (arr) => {
  let n = arr.length;
  let max = arr[n - 1];
  let leaders = [arr[n - 1]];

  for(let i = n - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      leaders.unshift(arr[i])
    }
  }
  return leaders;
}


let arr = [7, 10, 4, 3, 6, 5, 2]
console.log(leadersInArray(arr))

arr = [10, 20, 30]
console.log(leadersInArray(arr))