arr=[2,4,6,9.11,9,6,8,9,5,3];

let num=arr[0]
console.log("first number is: ",num);
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return "not a prime number";
      }
    }
    return "number is prime";
  }
  let pri=isPrime(num)
  console.log(pri);
