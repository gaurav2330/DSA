const findMaxAppearingElement = (left, right) => {
  let freqArr = new Array(100).fill(0)

  for(let i = 0; i < left.length; i++) {
    freqArr[left[i]] += 1;
    freqArr[right[i]+1] -= 1;
  }

  let res = 0;

  for (let i = 1; i < 100; i++) {
    freqArr[i] = freqArr[i - 1] + freqArr[i];
    if (freqArr[i] > freqArr[res]) res = i;
  }

  return res;
}

// Given two arrays, find the maximum appearing element in ranges
// A range is the range between the element of both the array at a certain index.
// Eg: left = [1, 2, 5, 15], right = [5, 8, 7, 18]
// In the above example one of the range would be [1, 2, 3, 4, 5] - since these are all the numbers that lie betwen left[0] and right[0]


let left = [1, 2, 5, 15], right = [5, 8, 7, 18]
console.log(findMaxAppearingElement(left, right)) // 5

left = [1, 2], right = [5, 4]
console.log(findMaxAppearingElement(left, right)) // 2
