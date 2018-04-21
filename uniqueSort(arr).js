function uniqueSort(arr) {
	return arr.filter(function (item, idx, all) {
		return idx === all.indexOf(item);
	}).sort(function (a, b) {
		return a - b;
	});
}

console.log(uniqueSort([1, 2, 4, 3]));
console.log(uniqueSort([6, 7, 3, 2, 1]));
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));
console.log(uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]));
console.log(uniqueSort([1, 2, 5, 4, 7, 7, 7]));
console.log(uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1]));
console.log(uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1]));
console.log(uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415]));