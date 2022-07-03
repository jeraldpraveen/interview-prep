function binarySearch(numArray, key) {
  let midIndex = Math.floor(numArray.length / 2);
  let midElement = numArray[midIndex];

  if (midElement === key) return true;
  else if (midElement < key && numArray.length > 1) {
    return binarySearch(numArray.splice(midIndex, numArray.length), key);
  } else if (midElement > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, midIndex), key);
  } else return false;
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));
