/**
 * LEETCODE Merge Sorted Array
 * Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 */


//SOLUTION 1=>optimise chatgpt solution of mergeManual
var mergeOptimised = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  // Merge from the end of both arrays
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If there are remaining elements in nums2, copy them
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};



//TRIED APPROACH with UNahndled cases
var mergeManual = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  //means one of the arr is empty
  if(k==0){
    return nums1+nums2
  }
  while (k > 0) {
    if (i == 0 || (j == 0 && i == 1) || j == 1) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        nums1[0] = nums2[0];

        return nums1;
      }
    }
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
    console.log("k", { k, i, j }, nums1, "nums2", nums2);
  }
  return nums1;
};





// SOLTION-2  using in built sort
var merge = function(nums1, m, nums2, n) {
     let count=0;
    for(var i=0;i<n;i++)
    {
       nums1[m+i]=nums2[i];
      
    }
    return nums1.sort((a,b)=>{return a-b});
};