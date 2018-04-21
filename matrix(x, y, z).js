function matrix(x, y, z) {
	// x - number of arrays
	// y - array size
	// z - element to fill in
	var arr = [];
	for (var i = 0; i < x; i += 1) {
		var subarr = new Array(y);
		subarr.fill(z, 0, y);
		arr.push(subarr);
	}
	return arr;
}

console.log(matrix(3, 4, 0));
console.log(matrix(2, 3, "#"));
console.log(matrix(2, 3, -4));
console.log(matrix(1, 2, 0));
console.log(matrix(3, 2, 3));
console.log(matrix(2, 1, "edabit"));
console.log(matrix(3, 2, 0));