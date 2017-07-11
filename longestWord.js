*/Return the length of the longest word in the provided sentence.

Your response should be a number.*/

function findLongestWord(str) {
  str = str.split(" ");
  var longest = 0;

  for (var i=0; i < str.length; i++ ){
    if (str[i].length > longest){
      longest = str[i].length;
      word = str[i];
    }
  }
  return longest; 
}