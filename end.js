//Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
  length = str.length;
  var i = length - target.length;
  for (i; i < length; i--) {
  if(str.substr(i, i + target.length) == target){ 
      return true;
    } 
    else {
      return false;
    }
  }
  }


end('Bastian', 'n');