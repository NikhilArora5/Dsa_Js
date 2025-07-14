const arr = [1, 2, 3, 4, 5, 6];

// sum of odd numbers in arr
function calculateArrOddSum(arr) {
  let n = arr.length - 1;

  return sumOfOdd(n);
}

function sumOfOdd(n) {
  if (n < 0) {
    return 0;
  }

  let currVal = arr[n] % 2 == 0 ? 0 : arr[n];

 

  return currVal + sumOfOdd(n - 1);
}

// sum of numbers in arr

let n = arr.length - 1;

function calculateArrSum(arr) {
  let n = arr.length - 1;

  return sum(n);
}
function sum(n) {
  if (n < 0) {
    return 0;
  }

  return arr[n] + sum(n - 1);
}

console.log(calculateArrOddSum(arr));
