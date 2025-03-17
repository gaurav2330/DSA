const arr = [10, 5, 20, 8]

let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest); // 20