/* Remove all falsey values from an array.

Falsey values in javascript are false, null, 0, "", undefined, and NaN. */

function bouncer(arr) {
  //callback function for filter method
  function falsey(value, index, array) {
   if (value === '' || value === false || value === null || value === 0 || value === undefined){
     return false;
   } else {
     return true;
   }
    }
  
  return arr.filter(falsey);
}

bouncer([7, 'ate', '', false, 9]);
Raw
 falsey.md