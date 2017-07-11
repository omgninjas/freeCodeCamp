//Sum All Numbers in a Range

function sumAll(arr) {
  var newArr =[];
  var min= Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  

  var total;   

  
  if(min===max) {
    return min + max;
  } 

   for(var i=min; i <= max; i++) {
      newArr.push(i);
   }
    
  total = newArr.reduce(function(a, b) {
    return a + b;
   });
                             
return total;
}

sumAll([2, 2]);