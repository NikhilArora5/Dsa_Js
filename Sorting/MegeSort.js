const mergeSort = (arr) => {
  // Base case return the arr as single elemnt is sorted
  if (arr.length == 1) return arr;

  let n = arr.length;

  const mid = Math.floor(n / 2);

  
  const sortedArr1 = mergeSort(arr.slice(0, mid));
  const sortedArr2 = mergeSort(arr.slice(mid));


 // using recursively mergeSortedArrays  helper function to merge two sorted arrays
  return mergeSortedArrays(sortedArr1, sortedArr2);
};

const mergeSortedArrays = (arr_1, arr_2) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let l1 = arr_1.length;
  let l2 = arr_2.length;

  let temp = new Array(l1 + l2);

  while (i < arr_1.length && j < arr_2.length) {
    if (arr_1[i] < arr_2[j]) {
      temp[k] = arr_1[i];
      i++;
    } else {
      temp[k] = arr_2[j];
      j++;
    }
    k++;
  }

  if (i < l1) {
    for (i; i < l1; i++) {
      temp[k] = arr_1[i];
      k++;
    }
  }

  if (j < l2) {
    for (j; j < l2; j++) {
      temp[k] = arr_2[j];
      k++;
    }
  }

  return temp;
};

const arr = [5, 2, 4, 1, 6, 7];
console.log(mergeSort(arr))


//---------------------------------------------------BETTER SYNTAX-------------------------------------------

// standard optimised

const mergeSortBetterSyntax = (arr) => {
  // Base case: single element array is already sorted
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  
  // Recursively sort both halves
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  // Merge the sorted halves
  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements and merge
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from either array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

