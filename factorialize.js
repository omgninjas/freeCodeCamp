//Bonfire: Factorialize a Number

/*Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120f
*/

function factorialize(n){
  if (n<0){
    console.log("You cannon make a factorial from a negative number");
  } else if (n===0){
    return 1;
  }
return n* factorial(n-1);
}