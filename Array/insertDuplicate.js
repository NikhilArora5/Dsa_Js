/**
 * Input: arr[] = [1, 0, 2, 3, 0, 4, 5, 0], K = 0 
Output: [1, 0, 0, 2, 3, 0, 0, 4]
Explanation: The given array [1, 0, 2, 3, 0, 4, 5, 0] is modified to [1, 0, 0, 2, 3, 0, 0, 4] after insertion of two 0’s and truncation of two extra elements.
 */

const arr = [1, 0, 2, 3, 0, 4, 5, 0];

const inserDuplicateManual = (arr, k) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] == k) {
      arr.splice(i + 1, 0, k);
      i=i+1

      arr.pop();
    }
  }

  return arr
};

// console.log(inserDuplicateManual(arr,0))
console.log(arr.indexOf(0))
console.log("last indexx",arr.lastIndexOf(0))



