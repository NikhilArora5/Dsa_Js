



/**
 * 
 * @param {*} arr 
 * @returns 
 * Kadane Algo Best Approach
 */
const kadaneMaxSubarr = (arr) => {
  let sum = 0;
  let maxProfit = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;

    if (maxProfit < sum) {
      maxProfit = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxProfit
};
