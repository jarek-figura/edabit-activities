const magnitude = vector => Math.sqrt(
		vector.map(item => item * item).reduce((sum, next) => sum + next, 0)
);

console.log(magnitude([3, 4]));           // 5
console.log(magnitude([0, 0, -10]));      // 10
console.log(magnitude([]));               // 0
console.log(magnitude([2, 3, 6, 1, 8]));  // 10.677078252031311
console.log(magnitude([9,-9,3]));         // 13.076696830622021
console.log(magnitude([-24,94,4,0,10]));  // 97.61147473529944