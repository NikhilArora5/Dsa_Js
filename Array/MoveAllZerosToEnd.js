const arr = [0, 1, 0, 3, 12];




 /**
  * 
  * @param {*} arr 
  * @returns
  * 
  * SOLUTION  BRUTE FORCE
  */

function moveZeros(n, a) {
    // Temporary array
    let temp = [];
    
    // Copy non-zero elements from original array to temp array
    for (let i = 0; i < n; i++) {
        if (a[i] !== 0) {
            temp.push(a[i]);
        }
    }
    
    // Number of non-zero elements
    let nz = temp.length;
    
    // Copy elements from temp and fill the first nz fields of the original array
    for (let i = 0; i < nz; i++) {
        a[i] = temp[i];
    }
    
    // Fill the rest of the cells with 0
    for (let i = nz; i < n; i++) {
        a[i] = 0;
    }
    
    return a;
}







 /**
  * 
  * @param {*} arr 
  * @returns
  * 
  * SOLUTION OPTIMISED 
  */
const moveZerosToEnd = (arr) => {
  let n = arr.length;
  let k = 0;
  if (arr.length === 1) {
    return arr
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      k++;
    }
  }

  return arr;
};

console.log(moveZerosToEnd(arr));
