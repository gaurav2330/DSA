function check (arr) { 
  let largest = arr[0], secondLargest = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    else if (arr[i] < largest) {
      if (secondLargest == -1 || arr[i] > secondLargest) {
        secondLargest = arr[i]
      }
    }
  }
  return secondLargest;
}

let arr = [10, 5, 20, 8]
console.log(check(arr), 1111)

arr = [20,10,20,8,12]
console.log(check(arr), 2222)

arr = [10, 10,10]
console.log(check(arr), 3333)