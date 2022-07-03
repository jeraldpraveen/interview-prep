function bubbleSort(numArray) {
  for (let i = numArray.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numArray[j] > numArray[j + 1]) {
        let temp = numArray[j + 1];
        numArray[j + 1] = numArray[j];
        numArray[j] = temp;
      }
    }
  }
  console.log(numArray);
  return numArray;
}

bubbleSort([6000, 6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]);
