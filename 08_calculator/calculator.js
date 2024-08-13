const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	return array.reduce((total, el) => total + el, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, el) => total * el, 1);
};

const power = function(num, power) {
  let powerTotal = 1;
  for (let i = 0; i < power; i++) {
    powerTotal *= num;
  }
  return powerTotal;
};

const factorial = function(num) {
	let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
