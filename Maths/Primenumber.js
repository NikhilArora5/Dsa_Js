// Optimised with edge cases

function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false; // handled all even numbers here

  // to check only for the odd hence increment by 2
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

// Solution 2 Instead of looping up to num - 1, you can loop only up to √num, which reduces time complexity.

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
console.log(isPrimeNumber(2)); // true
console.log(isPrimeNumber(4)); // false
console.log(isPrimeNumber(17)); // true
console.log(isPrimeNumber(18)); // false
