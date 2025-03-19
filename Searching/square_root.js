const squareRoot = (x) => {
  if (x == 1) return 1;

  let start = 0, end = x, ans = -1;
  while (start < end) {
    let mid = Math.floor((start + end)/ 2)

    if (mid * mid < x) {
      start = mid + 1;
      ans = mid;
    }
    else if (mid * mid == x) {
      return mid;
    }
    else {
      end = mid - 1;
    }
  }
  return ans;
}

console.log(squareRoot(4))

console.log(squareRoot(14))

console.log(squareRoot(25))
console.log(squareRoot(48))
console.log(squareRoot(77))
console.log(squareRoot(81))
