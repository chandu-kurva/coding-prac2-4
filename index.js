let factorialOfNumber = require("../factorial/index");
let ratioOfTwoNumbers = require("../ratio/index");

let ratioAndFactorial = function (num1, num2, num3) {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial = factorialOfNumber(num3);
  return {
    ratio: ratio,
    factorial: factorial,
  };
};

console.log(ratioAndFactorial(2, 5, 5));

module.exports = ratioAndFactorial;
