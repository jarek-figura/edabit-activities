function keysAndValues(obj) {
	var arr = [];
	arr.push(Object.keys(obj));
	arr.push(Object.keys(obj).map(function (item) {
		return obj[item];
	}));
	return arr;
}

console.log(keysAndValues({a: 1, b: 2, c: 3}));                         // [["a", "b", "c"], [1, 2, 3]]
console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}));  // [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
console.log(keysAndValues({key1: true, key2: false, key3: undefined})); // [["key1", "key2", "key3"], [true, false, undefined]]
console.log(keysAndValues({1: null, 2: null, 3: null}));                // [["1", "2", "3"], [null, null, null]]
console.log(keysAndValues({key1: "cat", key2: "dog", key3: null}));     // [["key1", "key2", "key3"], ["cat", "dog", null]]