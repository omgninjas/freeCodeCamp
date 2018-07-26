//Caesars Cipher

function rot13(str) { // LBH QVQ VG!
  //These instructions are pooly written. Assume that the only input will be UPPERCASE characters and maybe punctuation. Also assume that punctuation is not encoded. 
  var crap = "";
  for (var i = 0; i < str.length; i++) {
    //Pass on any [^a-z]+/i Check for a letter, num or punctuation, if it is outside of these values pass it along.
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90){
      crap+= String.fromCharCode(str.charCodeAt(i));
      continue;
    }
    //since this Only includes A-Z and uses Ascii values you have to either +13 for A-M and -13 for N-Z.
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78  ) {
      crap+= String.fromCharCode(str.charCodeAt(i) + 13);
    }
    else {
      crap+= String.fromCharCode(str.charCodeAt(i) - 13);
    }
  }
  
  return crap;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");