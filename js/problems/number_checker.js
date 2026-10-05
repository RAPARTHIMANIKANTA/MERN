const numbers = [5, -8, 0, 14, 21, -3, 12];

console.log("Number Checker Results:\n");

for (const num of numbers) {
  const type = Math.sign(num) === 1 ? "positive" : Math.sign(num) === -1 ? "negative" : "zero";
  const evenOdd = num % 2 === 0 ? "even" : "odd";

  console.log(`${num} is ${type} and ${evenOdd}.`);
}
