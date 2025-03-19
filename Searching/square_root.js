const squareRoot = (x) => {
  if (x == 1) return 1;

  let start = 0, end = x;
  while (start < end) {
    let mid = Math.floor((start + end)/ 2)

    if (mid * mid < x) {
      if ((mid+1) * (mid+1) > x) {
        return mid;
      }
      else {
        start = mid + 1;
      }
    }
    else if (mid * mid == x) {
      return mid;
    }
    else {
      end = mid - 1;
    }
  }
}

console.log(squareRoot(4))

console.log(squareRoot(14))

console.log(squareRoot(25))
console.log(squareRoot(48))
console.log(squareRoot(77))
console.log(squareRoot(81))
