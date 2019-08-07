function sumPrimes(num) {
let sum = 0;
  let primes = [];
  for(let i = 2; i <= num; i++){
    for(let j=2; j<=i; j++){
      if (i === j){
        primes.push(i);
      }
       if (i % j === 0){
        break;
      } 
    }
  }
  return primes.reduce(function(x,y){return x+y;});;
}
sumPrimes(10);


  