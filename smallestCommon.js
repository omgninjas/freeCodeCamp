/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function smallestCommons(arr) {
	  /* Hi, sorry for the late reply, I'm currently travelling in asia and don't have internet connection very often. As you said before it's a shorthand for an if statement and the numbers refer to the index it's best if I explain on an example so let's say we have a simple array of [1,21,41,2] 1>21 returns 1 so it stays the same 21>41 same, 41>2 returns -1 so 41 and 2 switch positions now 21>2 again returns -1 so the two change positions and we end up with a sorted array. I hope this cleared things up! */
	arr.sort((a,b)=>a>b?1:-1)
  let [div, num] = arr

  while(div < arr[1]){
      if(num % div===0) {
				div++;
				} else {
       num += arr[1];
			 div = arr[0]
    }
    }
  return num;
}

console.log(smallestCommons([1,13]));
//console.log(smallestCommons([23,18]));