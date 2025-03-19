function binarySearch(arr, target)  {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
          return mid; // Target found
      } else if (arr[mid] < target) {
          left = mid + 1; // Search right half
      } else {
          right = mid - 1; // Search left half
      }
  }
  
  return -1; // Target not found
}

// Example usage:
const numbers = [1, 3, 5, 7, 9, 11, 15];
console.log(binarySearch(numbers, 7)); // Output: 3
console.log(binarySearch(numbers, 10)); // Output: -1





const binarySearchManual = (n) => {
  const array = [-1,0,3,5,9,12]
  let l = 0;
  let h = array.length - 1;
  console.log("h", h);
  

  if (h == 0) {
    if (array[h] == n) {
      return h;
    }
  }

  while (l < h && h !== 0) {
    let mid = (h - l) / 2 + l;
    mid = mid > 1 ? Math.ceil(mid) : Math.floor(mid);
    // console.log("counter---", counter);
    console.log("mid", { mid, midValue: array[mid], h, l });
    

    if (array[mid] == n) {
      console.log("FOUND", mid, array[mid]);
      return mid;
    }

    if (n > array[mid]) {
      l = mid;
    } else {
      h = mid;
    }
    console.log("");
  }
  console.log("not foud");

  return -1;
};
binarySearch(2);




