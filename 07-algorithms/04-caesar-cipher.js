function caesarCipher(string, num) {
  num = num % 26;
  let lowerCaseString = string.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var newString = "";
  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];
    if (currentLetter === " ") {
      newString = newString + currentLetter;
      continue;
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 26) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex; // If num is passed negative

    if (string[i] === string[i].toUpperCase()) {
      newString = newString + alphabet[newIndex].toUpperCase();
    } else {
      newString = newString + alphabet[newIndex];
    }
  }
  console.log(newString);
  return newString;
}

caesarCipher("Zoo KeepER", 2);
// OUTPUT ---> Bqq MggrGT
