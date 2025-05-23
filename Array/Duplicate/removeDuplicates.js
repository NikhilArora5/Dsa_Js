/*
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores)

*/
let nums = [1, 1, 2];
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// nums=[0,0,1,1,2]

// Solution-1
const removeDup = (nums) => {
  let idx = 0;
  let n = nums.length;
  if (n == 0) return 0;
  for (let i = 0; i < n; i++) {
    if (nums[idx] != nums[i]) {
      // incrementing the idx whenever we get the case of not equal

      idx += 1;
      // Now we replace the element at  nums[idx] with nums[i] as not equal
      nums[idx] = nums[i];

      // important thing to note is we dont swap values in this problem approach
    }
  }

  console.log("nums :", nums);
  // console.log("OUTPUT :",nums.splice(0,5))

  // console.log("n-idx+1 :",n-idx+1)

  // at the end we return idx+1 as length of unique elemnst in array
  return idx + 1;
};

let k = removeDup(nums);

// Solution-2

const removeDuplicatesSol2 = (arr) => {
  let n = arr.length;
  let k = 1;
  for (let i = 0; i < n - 1; i++) {
    if(arr[i]!=arr[i+1]){

      //k is taken as one so update first then inc
      arr[k]=arr[i+1]
      k++
    }
  }

  return arr
};

// -----------------------------------------------PROBLEM 2------------------------------------------

/***Contains Duplicate
 * we can create object in javascri
 * pt and in JS object key will always be unique in nature so we can story array element as key in object and check if key exists already means element is duplicated.
 * Standard Appproach
 */

var containsDuplicate = function (nums) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      return true;
    } else {
      hashMap[nums[i]] = true;
    }
  }
  return false;
};
