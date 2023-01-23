const convertToCelsius = function(FInput) {
  let CResult = (FInput - 32) * (5 / 9)
  let result = Math.round(CResult * 10) / 10
  return result
};

const convertToFahrenheit = function(CInput) {
  let FResult = (CInput * (9 / 5) + 32)
  let result = Math.round(FResult * 10) / 10
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
