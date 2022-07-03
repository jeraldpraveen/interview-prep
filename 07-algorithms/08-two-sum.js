function twoSum(numArray, sum) {
  let resultArray = [];
  let size = numArray.length;
  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < i; j++) {
      if (numArray[i] + numArray[j] === sum) {
        resultArray.push([numArray[i], numArray[j]]);
      }
    }
  }
  console.log(resultArray);
  return resultArray;
}

// ANOTHER SYNTAX
function twoSumSingleLoop(numArray, sum) {
  let pairs = [];
  let hashTable = [];

  numArray.forEach((element) => {
    let counterPart = sum - element;
    if (hashTable.indexOf(counterPart) !== -1) {
      pairs.push([element, counterPart]);
    }
    hashTable.push(element);
  });
  console.log(pairs);

  return pairs;
}
twoSum([1, 6, 4, 5, 3, 3], 7);
twoSumSingleLoop([1, 6, 4, 5, 3, 3], 7);

// OUTPUT --> [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]
