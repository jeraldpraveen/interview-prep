function palindrome(originalString) {
  let string = originalString.toLowerCase();
  let i = 0;
  let j = string.length - 1;
  let palindrome = true;
  while (i < j) {
    if (string.charAt(i) !== string.charAt(j)) {
      palindrome = false;
      break;
    }
    i++;
    j--;
  }
  console.log(palindrome);
  return palindrome;
}
palindrome("madam");
palindrome("madama");
palindrome("MadammAdam");

// ANOTHER SYNTAX FOR PALINDROME CHECK
function isPalindrome(originalString) {
  let string = originalString.toLowerCase();
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  var charactersArr = string.split("");
  var lettersArray = [];
  charactersArr.forEach((char) => {
    if (validCharacters.indexOf(char) !== -1) lettersArray.push(char);
  });
  if (lettersArray.join("") === lettersArray.reverse().join("")) return true;
  else return false;
}

console.log(isPalindrome("MadammAdam"));
console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome("Madam, I'm Adama"));
