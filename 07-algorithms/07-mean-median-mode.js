function getMean(arr) {
  let total = 0;
  arr.forEach((element) => {
    total = total + element;
  });
  let mean = total / arr.length;
  console.log(mean);
  return mean;
}

function getMedian(arr) {
  arr.sort((a, b) => a - b);
  let median;
  let size = arr.length;
  if (size % 2 !== 0) {
    median = arr[Math.floor(size / 2)];
  } else {
    var mid1 = arr[size / 2 - 1];
    var mid2 = arr[size / 2];
    median = (mid1 + mid2) / 2;
  }
  console.log(median);
  return median;
}

function getMode(arr) {
  let modeObj = {};
  arr.forEach((element) => {
    if (!modeObj[element]) modeObj[element] = 1;
    else {
      modeObj[element] = modeObj[element] + 1;
    }
  });

  // create array of modes
  var maxFrequency = 0;
  var modes = [];
  for (let key in modeObj) {
    if (modeObj[key] > maxFrequency) {
      modes = [key];
      maxFrequency = modeObj[key];
    } else if (modeObj[key] === maxFrequency) modes.push(key);
  }

  return modes;
}

function getMeanMedianMode(arr) {
  getMean(arr);
  getMedian(arr);
  console.log(getMode(arr));
}

getMeanMedianMode([9, 10, 23, 10, 23, 9, 11, 11, 11]);
