const equilibriumPoint = (arr) => {
  let lArr = [], rArr = [], n = arr.length;

  for(let i = 0; i < n; i++) {
    lArr[i] = (arr[i - 1] + lArr[i - 1]) || 0;
    rArr[n - i - 1] = (rArr[n - i] + arr[n - i]) || 0
  }

  for(let i = 0; i < n; i++) {
    if (lArr[i] == rArr[i]) return true;
  }
  return false;
}

let arr = [3, 4, 8, -9, 20, 6]
console.log(equilibriumPoint(arr))

arr = [4, 2, -2]
console.log(equilibriumPoint(arr))

arr = [4, 2, 2];
console.log(equilibriumPoint(arr))
