const nums = [2,1,3,4];




// Solution-1 
// Time

const checkIfSortedAndRotated = (arr) => {
  let n = arr.length;
  let k = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] <=arr[i + 1]) {
      k++;
    } else {
      break;
    }
  }

  k = k % n; // to get actual rotation

  //Now first left rotate k

  reverArrTwoPointer(arr, k + 1, n - 1);
  reverArrTwoPointer(arr, 0, k);
  reverArrTwoPointer(arr, 0, n - 1);

  //now check if arr is sorted

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};

const reverArrTwoPointer = (arr, i, j) => {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];

    i += 1;
    j += -1;
  }
};


console.log(checkIfSortedAndRotated(nums))
