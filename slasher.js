//Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, n) {

  if (arr.length <= n){
    arr = [];
  }
  else {
    arr = arr.slice(n);
  }
  return arr;
}


slasher([1, 2, 3], 2);