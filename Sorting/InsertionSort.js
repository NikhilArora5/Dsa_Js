const arr = [5, 2, 4, 1, 6, 7];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

function InsertionSort(arr) {
  let n = arr.length ;
  for (let currIdx = 1; currIdx < n ; currIdx++) {
    for (let prev = currIdx; prev > 0; prev--) {
      if (arr[prev] < arr[prev - 1]) {
        [arr[prev], arr[prev - 1]] = [arr[prev - 1], arr[prev]];
      } else {
        break;
      }
    }
  }

  return arr;
}

console.log(InsertionSort(arr));
