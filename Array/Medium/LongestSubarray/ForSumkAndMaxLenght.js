/**
 * Longest Subarray with given Sum K(Positives)
 * Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

Example 2:
Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
Result: 3
Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

 */

//Solution-1 BruteForce

const BruteForceSolution = (arr, sum) => {
  let n = arr.length;
  let maxSubArrLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    let currSum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      currSum += arr[j];
      count++;

      if (currSum == sum) {
        //update the maxLength
        if (maxSubArrLength < count) maxSubArrLength = count;
      }
      if (currSum > sum) {
        break;
      }
    }

    // Single element case
    if (arr[i] === sum && maxSubArrLength < 1) {
      maxSubArrLength = 1;
    }
  }

  return maxSubArrLength;
};

// console.log(BruteForceSolution([2, 3, 10, 1, 8, 7], 10));
const TwoPointerSolution = (arr, sum) => {
  let n = arr.length;
  let maxSubArrLength = 0;
  let count = 1;
  let i = 0;
  let currSum = arr[0];
  let j = 1;

  //as we will only iterate till n-1
  if (arr[n - 1] == sum) {
    maxSubArrLength = 1;
  }

  while (i < n - 1) {
    currSum += arr[j];
    count++;

    if (currSum == sum) {
      //update the maxLength
      if (maxSubArrLength < count) maxSubArrLength = count;

      // and if it has been iterated till last wiht j=n-1 then stop the loop
      if (j == n - 1) {
        break;
      }
    }

    if (currSum>sum || j == n - 1) {
      i++;
      j = i + 1;
      count = 1;
      currSum = arr[i];
    } else {
      j++;
    }
    // Single element case
    if (arr[i] === sum && maxSubArrLength < 1) {
      maxSubArrLength = 1;
    }
  }

  return maxSubArrLength;
};

console.log(TwoPointerSolution([1, 1, 1, 2, 3], 5));
