// 1. Spread Operator untuk mengcopy array
// define array 1
const arr1 = [1, 2, 3, 4, 5];

// define array 2
const arr2 = [...arr1];

// print output
console.log('array 1', arr1); // Output: [1, 2, 3, 4, 5]
console.log('array 2', arr2); // Output: [1, 2, 3, 4, 5]

// 2. Penggabungan array menggunakan Spread Opertator
// define array 3
const arr3 = [1, 2, 3];

// define array 4
const arr4 = [4, 5, 6];

// define array 5
const arr5 = [...arr3, ...arr4];

// print arrat 5
console.log(arr5); // Output: [1, 2, 3, 4, 5, 6]