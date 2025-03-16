const minConsecutiveFlips = (arr) => {
  let str = '';

  for(let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      if (arr[i] != arr[0]) {
        str = `From ${i} to `
      }
      else {
        str += `${i - 1}`
        console.log(str)
      }
    }
  }
  if (str.length > 0) {
    str += `${arr.length - 1}`
    console.log(str)
  }
}

let arr = [1, 1, 0, 0, 0, 1]
minConsecutiveFlips(arr)
console.log('###########################')

arr = [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1]
minConsecutiveFlips(arr)
console.log('###########################')

arr = [0, 0, 1, 1, 0, 0, 1, 1, 0, 1];
minConsecutiveFlips(arr)
