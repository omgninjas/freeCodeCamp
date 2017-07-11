//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// using arguements object and filter
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  var poo = args.slice(1);
  
    function destroy(element) {
        for(var i= 0; i< poo.length; i++) {
          if (element === poo[i]) {
          return false;
          }
        }
      return true;
    }

    var destroyd = args[0].filter(destroy);
    
    return destroyd;
}


//just using arguements object 
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments).slice(1);
  
  for (var i in arr) {
      for (var j in args) {
          if (arr[i] === args[j]) {
              arr.splice(i, 1);
          }
      }
  }
  return arr;
}

/*
Why can't:


function destroy(element) {
        for(var i= 0; i< poo.length; i++) {
          if (element === poo[i]) {
          return false;
          }
        }
      return true;
    }
be condensed to:


 function destroy(element) {
            for(var i= 0; i< poo.length; i++) {
               return element === poo[i] ? false : true;
            }
        }
I'm not really understanding why these are so different....

*/