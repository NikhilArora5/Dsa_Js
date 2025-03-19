const arr = [5, 1, 3, 7, 2];
const sum = 10;

const usingTwoPointer = (arr, sum) => {
  arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const leftPointer = arr[start];
    const rightPointer = arr[end];
    if (leftPointer + rightPointer == sum) {
      return [rightPointer, leftPointer];
    } else if (rightPointer + leftPointer > sum) {
        end = end - 1;
    } else {
        start += 1;
    }



  }


  return -1
};


const result=usingTwoPointer(arr,sum)
console.log("result",result)


/*
For Multiple pairs
const usingTwoPointer = (arr, sum) => {
  arr.sort((a, b) => a - b);
  let start = 0, end = arr.length - 1;
  let result = [];

  while (start < end) {
    const leftPointer = arr[start];
    const rightPointer = arr[end];

    if (leftPointer + rightPointer === sum) {
      result.push([rightPointer, leftPointer]);
      start++; // Move to next pair
      end--;   // Move to next pair
    } else if (leftPointer + rightPointer > sum) {
      end--;
    } else {
      start++;
    }
  }

  return result.length ? result : -1;
};

// Example:
console.log(usingTwoPointer([1, 2, 3, 4, 5, 6], 7));
// Output: [[6, 1], [5, 2], [4, 3]]

 */

