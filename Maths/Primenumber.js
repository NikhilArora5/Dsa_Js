//Instead of looping up to num - 1, you can loop only up to √num, which reduces time complexity.


const isPrimeNumber = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Found a divisor, so it's not prime
    }
  }

  return true; // No divisors found, it's prime
};

// Test cases
console.log(isPrimeNumber(2));  // true
console.log(isPrimeNumber(4));  // false
console.log(isPrimeNumber(17)); // true
console.log(isPrimeNumber(18)); // false
