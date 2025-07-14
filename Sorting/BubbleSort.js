//optimised
function optimizedBubbleSort(arr) {
  const n = arr.length;
  let swapped;
  
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    // If no swaps occurred, array is sorted
    if (!swapped) break;
  }
  
  return arr;
}


function bubbleSort(arr) {
  let n = arr.length;

  let k = n - 1;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < k - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([5, 2, 4, 1, 6, 7]));
