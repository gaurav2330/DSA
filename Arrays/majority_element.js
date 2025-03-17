const majorityElement = (arr) => {
  let res = 0, count = 1, reqLen = Math.floor(arr.length/2);

  for(let i = 1; i < arr.length; i++) {
    if (arr[res] == arr[i]) {
      count++;
    }
    else {
      count --;
    }
    if (count == 0) {
      res = i, count = 1;
    }
  }

// Moore's voting algorithm

  // The first part of the solution is used to find the majority element candidate
  // A number cancels out other numbers chances of being the majority hence, we are reducing the count when the
  // new element is different from the previous one

  count = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[res] == arr[i]) count++;
  
  }
  if (count <= reqLen) res = -1;

  return res;
}

// The second part just checks whether the selected candidate's frequency is greater than n/2.

let arr = [8, 8, 6, 6, 6, 4, 6] 
console.log(majorityElement(arr)) // Any index of 6

arr = [3, 7, 4, 7, 7, 5]
console.log(majorityElement(arr)) // -1

arr = [20, 30, 40, 50, 50, 50, 50]
console.log(majorityElement(arr)) // Any index of 50
