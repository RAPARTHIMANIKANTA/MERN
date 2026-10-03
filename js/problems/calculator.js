let a = 12;
let b = 4;
let operator = "*";
let result;
if (operator === "+") {
	result = a + b;
} else if (operator === "-") {
	result = a - b;
} else if (operator === "*") {
	result = a * b;
} else if (operator === "/") {
	if (b === 0) {
		console.log("Cannot divide by zero");
	} else {
		result = a / b;
	}
} else {
	console.log("Invalid operator");
}
if (result !== undefined) {
	console.log("Result:", result);
}
