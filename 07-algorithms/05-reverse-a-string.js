function reverseString(string) {
  let stringArray = string.split(" ");
  let newStringArray = [];

  stringArray.forEach((word) => {
    let wordLength = word.length;
    let newString = "";
    while (wordLength > 0) {
      newString = newString + word[wordLength - 1];
      wordLength--;
    }
    newStringArray.push(newString);
  });
  let resultString = newStringArray.join(" ");
  console.log(resultString);
  return resultString;
}

reverseString("Coding JavaScript");
// OUTPUT --> gnidoC tpircSavaJ
