
/*function smallestCommons(arr) {
	  // Create new array and add all values from greater to smaller from the original array.
  let range = [],
    start = Math.min(arr[0], arr[1]),
    end =  Math.max(arr[0], arr[1]),
    LCM = 0,
    flag = true;
  for(let i = start; i <= end; i++ ){
    range.push(i);
  }
	do {

	} while(flag){
    LCM++;
    for(let j = start; j <= end; j++){
      if(LCM % j !==0) {
        break; 
				}
    else if(j===end) {
       flag = false;
    }
    }
  }
  return LCM;
}

console.log(smallestCommons([1,13]));
console.log(smallestCommons([23,18]));
*/