function checkPalindrome(word) {
  var isPalindrome = true
  var trueLength = word.length - 1;
  var timesToTry = trueLength / 2
  for (i = 0; i < timesToTry; i++) {
    if (word.charAt(i) != word.charAt(trueLength)) {
      isPalindrome = false
     }
    else {
      trueLength = trueLength - 1
    }
  }
 return isPalindrome;
 }

// Run the function here
document.write(checkPalindrome("racecar"))
