/**
 * Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]


 */

const sortColorInPlace = (arr) => {
  let k = 0; // to keep track and move zero and one

  //move zeroes
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      [arr[k], arr[i]] = [arr[i], arr[k]];
      k++;
    }
  }

  // start from k IMPORTANT
  for (let i = k; i < arr.length; i++) {
    if (arr[i] == 1) {
      [arr[k], arr[i]] = [arr[i], arr[k]];
      k++;
    }
  }

  return arr;
};

let nums = [2, 0, 2, 1, 1, 0];
// console.log(sortColorInPlace(nums));

/**
 * Solution 2
 * i,j and k
 */

const sortColorSeprateCounter = (arr) => {
  let n = arr.length;
  let k = n - 1; // for two
  let i = 0; // to loop over
  let j = 0;

  while (i < k) {
    if (arr[i] == 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j++;
      i++;
    } else if (arr[i] == 2) {
      [arr[k], arr[i]] = [arr[i], arr[k]];
      k--;
    } else {
      i++;
    }
  }

  return arr;
};

console.log(sortColorSeprateCounter(nums));
