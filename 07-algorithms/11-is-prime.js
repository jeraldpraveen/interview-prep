// i will always be less than the parameter so the condition below will never
// allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true

function isPrimeNumber(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
  }
  return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1,
  // reason for the n > 1 instead of true)
}

console.log(isPrimeNumber(1)); // returns false
console.log(isPrimeNumber(2)); // returns true
console.log(isPrimeNumber(9)); // returns false
console.log(isPrimeNumber(11)); // returns true
console.log(isPrimeNumber(19)); // returns true
