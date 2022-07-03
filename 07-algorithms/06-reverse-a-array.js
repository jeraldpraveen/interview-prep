function reverseArrayInPlace(arr) {
  let arrayLength = arr.length - 1;
  arr.forEach((element, index) => {
    let temp = element;
    if (index < arrayLength) {
      arr[index] = arr[arrayLength];
      arr[arrayLength] = temp;
      arrayLength--;
    }
  });
  console.log(arr);
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// IMPORTANT POINTS
// 1.Reverse The same Array
// 2.Do not use array.reverse()
// OUTPUT - [9, 8, 7, 6, 5,4, 3, 2, 1]
