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

// Not sure about the case and time complexityher below
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

    if (currSum > sum || j == n - 1) {
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

// SOLUTION 2: PREFIX SUM / HASMAP

function getLongestSubarray(a, k) {
  let n = a.length; // size of the array
  let preSumMap = new Map();
  let cursum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // calculate the prefix sum till index i
    cursum += a[i];

    // if the sum = k, update the maxLen
    if (cursum === k) {
      maxLen = Math.max(maxLen, i + 1);

    }

    // calculate the sum of remaining part i.e. x - k
    let rem = cursum - k;

    // calculate the length and update maxLen to get the longest subarray length
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);

    }

    // update the map checking the conditions this is  important if sum already exists then don't set it again in the map as the Map.
    //It is a collection of key-value pairs where each key is unique.
    //It does not add a new entry — Map maintains unique keys.
    if (!preSumMap.has(cursum)) {
      preSumMap.set(cursum, i);
    }
  }

  return    maxLen ;
;
}



// SOLUTION 3: Sliding window
/*✅ Why this Works:
j expands the window to the right.
i shrinks the window from the left until sum ≤ k.
We update maxSubArrLength only when the window sum equals k.

*/
const usingTwoPointerSlidingWindow = (arr, k) => {
  let i = 0,
    sum = 0,
    maxSubArrLength = 0;

  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    console.log("Added:", arr[j], "-> sum:", sum, `{i: ${i}, j: ${j}}`);

    while (i <= j && sum > k) {
      console.log("Shrinking window: subtracting", arr[i]);
      sum -= arr[i];
      i++;
    }

    if (sum === k) {
      maxSubArrLength = Math.max(maxSubArrLength, j - i + 1);
    }
  }

  return maxSubArrLength;
};

// console.log(usingSlidingWindow([3, 1, 5, 1, 1, 1, 1, 6, , 9], 10));

console.log(getLongestSubarray([0,0,0,0,0,0,0,0,0,0], 0));

