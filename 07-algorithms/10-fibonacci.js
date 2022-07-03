function fibonacci(position) {
  let arr = [1, 1];

  for (let i = 2; i < position; i++) {
    let value = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(value);
  }
  return arr[arr.length - 1];
}

// Another SYNTAX
function fibonacciRecursive(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
console.log(fibonacci(40)); // 102334155
console.log(fibonacciRecursive(40)); // 102334155
