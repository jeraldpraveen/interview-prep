function recurersiveExample(value) {
  if (value === 2) {
    return "success";
  } else {
    recurersiveExample(2);
  }
}

recurersiveExample(1);

// Best way to understand Recursive is by doing a Factorial example
// 4! => 4*3*2*1 = 24
// 3! => 3*2*1 = 6
const factorial = (num, resultValue = 1) => {
  if (num === 1) {
    return resultValue;
  } else {
    resultValue = resultValue * num;
    return factorial(num - 1, resultValue);
  }
};

console.log(factorial(4));
console.log(factorial(3));

// Another SYNTAX FOR finding Factorial with Recursion
const factorialOne = (num) => {
  if (num === 1) {
    return num;
  } else {
    return num * factorialOne(num - 1);
  }
};

console.log(factorialOne(4));
console.log(factorialOne(3));
