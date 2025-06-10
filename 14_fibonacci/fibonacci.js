const fibonacci = function(fib) {

    if (fib === 0 ){
        return 0
    }

    if (fib < 0 || fib == "" ){
        return "OOPS"
    }

  let a = 0, b = 1, sum = 0;

  for (let i = 0; i < fib ; i++){
    sum += a
    let temp = a + b;
    a = b
    b = temp 
  }
  return a
};

console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
