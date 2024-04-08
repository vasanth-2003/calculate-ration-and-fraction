const factorialOfNumber = require('../factorial/index.js')
const ratioOfTwoNumbers = require('../ratio/index.js')

function ratioAndFactorial(num1, num2, num) {
  const factorial = factorialOfNumber(num)
  const ratio = ratioOfTwoNumbers(num1, num2)
  
  return {ratio,factorial}
}
module.exports = ratioAndFactorial(1, 2, 3)

//console.log(ratioAndFactorial(1, 2, 3))
