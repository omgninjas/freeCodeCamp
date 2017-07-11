/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.*/

function palindrome(str) {
  
var strB = str.replace(/\W+|\s+/g,'').toLowerCase();
var reverse = strB.split('').reverse().join('');

  if (strB === reverse) {
    console.log(strB +" vs. "+ reverse);
       return true;
      }
      else {
        console.log(strB +" vs. "+ reverse);
        return false;
    }
}
palindrome("A man, a plan, a canal. Panama");