var max_value = 1000;
var sum = 0;

var solution1 = function (input) {
	for (var i = 1; i < input; i++) {
		if (i % 3 === 0) {
			sum += i;
		}
		else if (i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

console.log (solution1 (max_value));
