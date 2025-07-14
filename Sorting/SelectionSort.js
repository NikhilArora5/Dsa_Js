
// better consise code
function BetterCodeSelectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    // Assume current position is minimum
    let minIdx = i;
    
    // Find the index of the minimum element in the remaining unsorted array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    
    // Swap the found minimum element with the first element
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  
  return arr;
}


function SelectionSort(arr) {
  const n = arr.length;
  let idx = 0;
  for (let i = 0; i < n - 1; i++) {
    let smallestIdx = idx;
    for (let j = idx; j < n - 1; j++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }

    [arr[smallestIdx], arr[idx]] = [arr[idx], arr[smallestIdx]];
    idx += 1;
  }

  return arr
}


console.log(SelectionSort([5, 2, 4, 1, 6, 7]));