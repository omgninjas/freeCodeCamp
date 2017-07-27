
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var tempy = str.split("");
  var re = /\s+|_/g;
  var ge = /([a-z])([A-Z])/g;
  str = str.replace(ge, '$1-$2').replace(re, '-');
    
  return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
