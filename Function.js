function plus(p1, p2) {
    return p1 + p2;
}

function minus(p1, p2) {
    return p1 - p2;
}

function multiply(p1, p2) {
	return p1 * p2; // p1, p2 곱연산의 결과를 반환한다.
}

function divide(p1, p2) {
    return p1 / p2;
}

var x = plus(4, 3); // Function is called, return value will end up in x
var y = minus(4, 3);
var z = multiply(4, 3);
var w = divide(4, 3);

console.log("x: " + x);
console.log("y: " + y);
console.log("z: " + z);
console.log("w: " + w);

// es6?