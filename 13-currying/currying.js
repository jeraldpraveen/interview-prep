// Normal Function Syntax
// function getProduct(num1, num2) {
//   return num1 * num2;
// }

function getProduct(num1) {
  return function (num2) {
    return num1 * num2;
  };
}
getProduct(10)(20);

// Normal Function Syntax
// function getTravelTime(distance, speed) {
//   return distance / speed;
// }

function getTravelTime(distance) {
  return function (speed) {
    return distance / speed;
  };
}
const travelTimeBosNyc = getTravelTime(400);
console.log(travelTimeBosNyc(100));
console.log(travelTimeBosNyc(200));
