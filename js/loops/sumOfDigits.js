// calculate the sum od digits of a number
// Example 3456 then output is 18

function sumOfDigitsOfNum(n) {
  let sum = 0;

  while (n > 0) {
    let rem = n % 10; //to get the last digit
    n = Math.floor(n / 10);
    sum += rem;
  }

  return sum;
}

// console.log(sumOfDigitsOfNum(345));
