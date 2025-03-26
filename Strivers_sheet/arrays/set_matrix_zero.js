// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set
// its entire column and row to 0 and then return the matrix.

// Good Approach

function setMatrixZero (arr) {
  let n = arr.length;
  let rowArr = new Array(n), colArr = new Array(n);

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if (arr[i][j] == 0) {
        rowArr[i] = 1;
        colArr[j] = 1;
      }
    }
  }

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if (rowArr[i] == 1 || colArr[j] == 1) {
        arr[i][j] = 0
      }
    }
  }
  return arr;
}

// *********************************************************************************************************************

// Optimal approach

function setMatrixZero (arr) {
  return arr;
}

// *********************************************************************************************************************

testSetMatrixZeros(setMatrixZero)

function testSetMatrixZeros(fn) {
  const testCases = [
    {
      input: [
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9]
      ],
      expected: [
        [1, 0, 3],
        [0, 0, 0],
        [7, 0, 9]
      ]
    },
    {
      input: [
        [0, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
      ],
      expected: [
        [0, 0, 0],
        [0, 5, 0],
        [0, 0, 0]
      ]
    },
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ],
      expected: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
    }
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = fn(input);
    console.log(`Test Case ${index + 1}:`, JSON.stringify(result) === JSON.stringify(expected) ? "Passed" : "Failed");
  });
}
