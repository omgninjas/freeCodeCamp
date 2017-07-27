/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function fearNotLetter(str) {
  var i=0, result, counter = str.charCodeAt(0);
	str = str.toLowerCase();
	for(i; i < str.length ; i++ ){
		if(str.charCodeAt(i) !== counter) {
			result = String.fromCharCode(counter -1);
		} else {
			result = undefined;
		}
      counter++;
    }
return result;

}

function fearNotLetter(str) {
  str = str.toLowerCase();
  var i=0, result, counter = str.charCodeAt(0);
	for(i; i < str.length; i++ ){
      if(str.charCodeAt(i) !== counter + i) {
        result = String.fromCharCode(counter + i);
      } else {
        result = undefined;
      }
    }
  return result;
}

function fearNotLetter(str) {
  str = str.toLowerCase();
	for(var i = 0; i < str.length; i++ ){
     var counter = str.charCodeAt(0) + i;
      if(str.charCodeAt(i) !== counter) {
        return String.fromCharCode(counter);
      } 
    }
    return undefined;
}

fearNotLetter("abcdefghjklmno");