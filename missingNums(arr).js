const missingNums = arr => { return 55 - arr.reduce((prev, sum) => prev + sum, 0) };

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10])); // 5
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));  // 10
console.log(missingNums([7, 2, 3, 9, 4, 5, 6, 8, 10])); // 1
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9])); // 7
console.log(missingNums([1, 7, 2, 4, 8, 10, 5, 6, 9])); // 3