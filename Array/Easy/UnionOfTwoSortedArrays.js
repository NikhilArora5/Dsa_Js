const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

//SOLUTION 1- BRUTE FORCE TWO POINTER
// O(n2) as arr.includes is also O(n) itself
const BruteForce = (arr1, arr2) => {
  let m = arr1.length;
  let n = arr2.length;
  let unionArr = [];

  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    console.log("Running", { i, j });
    if (arr1[i] == arr2[j] && !unionArr.includes(arr1[i])) {
      unionArr.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j] && !unionArr.includes(arr1[i])) {
      unionArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] && !unionArr.includes(arr2[j])) {
      unionArr.push(arr2[j]);
      j++;
    } else if (unionArr.includes(arr2[j])) {
      j++;
    } else if (unionArr.includes(arr1[i])) {
      i++;
    }
  }

  while (i < m) {
    if (!unionArr.includes(arr1[i])) {
      unionArr.push(arr1[i]);
      i++;
    }
  }

  while (j < n) {
    if (!unionArr.includes(arr2[j])) {
      unionArr.push(arr2[j]);
      j++;
    }
  }

  return unionArr;
};

//SOLUTION 2- OPTIMISED TWO POINTER
// here we are just using a diferent method to avoid duplicates insteadof using arr.includes
const optimisedTwoPointer = (a, b) => {
  let res = [];
    let n = a.length, m = b.length;
    let i = 0, j = 0;
    
    // This is similar to merge of merge sort
    while(i < n && j < m) {
      
        // Skip duplicate elements in the first array
        if(i > 0 && a[i - 1] === a[i]) {
            i++;
            continue;
        }
      
        // Skip duplicate elements in the second array
        if(j > 0 && b[j - 1] === b[j]) {
            j++;
            continue;
        }
      
        // select and add the smaller element and move
        if(a[i] < b[j]) {
            res.push(a[i]);
            i++;
        } else if(a[i] > b[j]) {
            res.push(b[j]);
            j++;
        } 
        
        // If equal, then add to result and move both
        else {
            res.push(a[i]);
            i++;
            j++;
        }
    }
    
    // Add the remaining elements of a[]
    while(i < n) {
      
        // Skip duplicate elements in the first array
        if(i > 0 && a[i - 1] === a[i]) {
            i++;
            continue;
        }
        res.push(a[i]);
        i++;
    }
  
    // Add the remaining elements of b[]
    while(j < m) {
      
        // Skip duplicate elements in the second array
        if(j > 0 && b[j - 1] === b[j]) {
            j++;
            continue;
        }
        res.push(b[j]);
        j++;
    }
    
    return res;
};




// solution 3 using set
function findUnion(a, b) {
    let st = new Set();
  
    // Put all elements of a[] in st
    for (let i = 0; i < a.length; i++) 
        st.add(a[i]);
    
    // Put all elements of b[] in st
    for (let i = 0; i < b.length; i++) 
        st.add(b[i]);
    
    let res = Array.from(st);
    res.sort((x, y) => x - y);
    return res;
}


console.log(BruteForce(arr1, arr2));
