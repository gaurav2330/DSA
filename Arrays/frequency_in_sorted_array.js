const frequencyInSortedArray = (arr) => {
  // return arr.reduce((countMap, item) => {
  //   countMap[item] = (countMap[item] || 0) + 1;
  //   return countMap;
  // }, {})

  // This solution works but takes some extra space as the accumulator. Time complexiy - Theta(n)

  let count = 1;
  let ele = arr[0]
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] == ele) {
      count++;
    }
    else {
      console.log(`${ele}: ${count}`)
      ele = arr[i];
      count = 1;
    }
  }
  console.log(`${ele}: ${count}`)
  console.log('###################')
}


let arr = [10, 10, 10, 25, 30, 30]
frequencyInSortedArray(arr)

arr = [10, 10, 10, 10]
frequencyInSortedArray(arr)

arr = [10, 20, 30]
frequencyInSortedArray(arr)