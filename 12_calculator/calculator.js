const add = function(num1 , num2) {
  const add_math = num1 + num2 
  return add_math
	
};

const subtract = function(num1, num2 ) {
  const subtract_math = num1 - num2
  return subtract_math
	
};

const sum = function(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
	
};

const multiply = function(array ) {
  let mult = 1
  for (let i = 0; i < array.length; i++){
    mult *= array[i]
  }
  return mult
};

const power = function(num1, num2) {
  const math_power = num1 ** num2
  return math_power
	
};

const factorial = function(num1) {
  let factorial = 1
  for(let i = 1; i <= num1; i++ ){
    factorial *= i
  }
  return factorial
	
};

// add 
console.log(add(0,0))
console.log(add(2,2))
console.log(add(2,6))

// substract
console.log(subtract(10,4))
console.log(subtract(-10,-4))
console.log(subtract(-8,7))

// sum 
console.log(sum([]))
console.log(sum([7]))
console.log(sum([7,11]))
console.log(sum([1, 3, 5, 7, 9]))

// mult 
console.log("\nMultiply")
console.log(multiply([2,4]))
console.log(multiply([2, 4, 6, 8, 10, 12, 14]))

// mult 
console.log("\nPower")
console.log(power(4,3))
console.log(power(3,10))

// factorial
console.log("\nFactorial")
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))
console.log(factorial(10))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
