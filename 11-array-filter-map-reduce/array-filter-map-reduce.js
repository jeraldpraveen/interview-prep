const numbers = [1, 2, 3, 4, 5, 6];

const mapArray = numbers.map((element) => element * 2);
console.log(mapArray);

const filterArray = numbers.filter((element) => element % 2 === 0);
console.log(filterArray);

const reduceArray = numbers.reduce((accumulator, currentElement) => {
  return accumulator + currentElement;
}, 0); // 0 is initial value of accumulator
console.log(reduceArray);

// ALL CAN BE COMBINED
const sumOfEven = numbers
  .filter((n) => n % 2 === 0)
  .map((y) => y * 2)
  .reduce((acc, cur) => acc + cur);

console.log(sumOfEven);
