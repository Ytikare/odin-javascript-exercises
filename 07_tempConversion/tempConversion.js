const convertToCelsius = function(fahrenheit) {
  let result = (fahrenheit - 32) * (5 / 9);
  return Number(result.toFixed(1));
 };

const convertToFahrenheit = function(celsius) {
  let result = (9 / 5) * celsius + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
