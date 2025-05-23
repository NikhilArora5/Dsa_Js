/**
 * ROTATE ARRAY PROBLEMS
 */

/**
 * 1. Problem: rotate the array by left once
 */

const arr = [1, 2, 3, 5, 6];

const rotateOnceByleft = (arr) => {
  let rotated = arr[0];

  //till n-1 as there will out of index error arr[n-1]=arr[(n-1)+1]
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // setting te last element to the rotated
  arr[arr.length - 1] = rotated;
  return arr;
};

/**
 * 2. Problem: rotate the array by right once same concept arr[i-1]=arr[i] n to 1
 */
// console.log(rotateOnceByleft(arr))

/**
 * 3. Problem: rotate the array left  by K
 * SOLTION-1 :Use Nested looping and execute the rotate by once k times
 * Approach : Brute force
 * Time : O(n2)
 * Space :contant
 *
 * Edge Cases :
 * If k=n  (n is length) here it will run the loop k*n times but in actual no rotation happens
 * To get the actual rotation use k=k%n
 *
 */

const rotateLeftByk = (arr, k) => {
  let n = arr.length;
  k = k % n;
  for (let i = 0; i < k; i++) {
    //rotate the array k times
    rotateOnceByleft(arr);
  }

  return arr;
};
// console.log(rotateLeftByk(arr, 2));

/**
 * SOLUTION-2 Math ALgo formula
 * Time = n
 * space =n
 * using a algo and temp variable
 *  temp[i]=arr[(i+k)%n]
 */

const rotateLeftUsingMathAlgo = (arr, k) => {
  let n = arr.length;
  let temp = new Array(n);

  for (let i = 0; i < n; i++) {
    temp[i] = arr[(i + k) % n];
  }

  return temp;
};

console.log(rotateLeftUsingMathAlgo(arr, 3));

/**
 * SOLUTION-3 Using reversel function
 */

const reverArrTwoPointer = (arr, i, j) => {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];

    i += 1;
    j += -1;
  }
};
const arr2 = [1, 2, 3, 5, 6];

const rotateUsingReverse = (arr, k) => {
  console.log("rotateUsingReverse");
  
  let n = arr.length;
  reverArrTwoPointer(arr,0, k - 1);
  reverArrTwoPointer(arr,k, n - 1);
  reverArrTwoPointer(arr,0, n - 1);

  return arr
};

console.log(rotateUsingReverse(arr,1));

