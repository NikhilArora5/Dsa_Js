/** Solution 1  Runtime 71 ms
 * Edge cases
 * If n==1 2(0)=1 then 1 is the output number for 1 outout we have x=0 2(0)=1
 * If n=0   0 is the output so FALSE no value of  x 2(x) can give 0
 *
 * Time complexity O(n)
 */
var isPowerOfTwo = function (n) {
  let powerOfTwo = 2;
  if (n == 1 || n == 2) {
    return true;
  }
  if (n <= 0) return false;
  if (n % 2 !== 0) {
    return false;
  }

  for (let i = 2; i <= n; i++) {
    powerOfTwo = powerOfTwo * 2;
    console.log("log", { i, powerOfTwo });

    if (powerOfTwo > n) {
      return false;
    }

    if (powerOfTwo == n) {
      return true;
    }
  }
};

// const isPowerofTwoResult=isPowerofTwo(8)

// console.log("isPowerofTwoResult",isPowerofTwoResult)


/** Solution 2  Runtime= 1 ms
 * Edge cases if (n <= 0) return false;
 *
 * MAIN CONCEPT: using Bitwise operator
 *  In binary if the number is power of two then for the number n
 * n AND n-1 will always give 0
 * Time complexity O(1)
 */

const isPowerOfTwoBitwise = (n) => {
  if (n <= 0) return false;
  return (Math.abs(n) & (Math.abs(n) - 1)) === 0;
};

console.log(isPowerOfTwoBitwise(16));
