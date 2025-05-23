// const arr = [4, 2, 0, 3, 2, 5];
const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

/**
 * 1.=>BRUTE FORCE
 * For every element find the nearest element which is greater than itself from both sides
 * 
 *
 */

const bruteFroceTrapWater = (arr) => {
  let n = arr.length;
  let sum = 0;

  for (let i = 1; i < n - 1; i++) {
    let cur = arr[i];
    let nearestLeft = -1;
    let nearestRight = -1;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > cur) {
        nearestLeft = arr[j] > nearestLeft ? arr[j] : nearestLeft;
        
      }
    }

    for (let k = i + 1; k < n; k++) {

      if (arr[k] > cur) {
        nearestRight = arr[k] > nearestRight ? arr[k] : nearestRight;
        
      }
    }

    // console.log("nearestleft", { nearestLeft, nearestRight ,cur,i});
    if (nearestLeft >= 0 && nearestRight >= 0) {
      let minHeight = Math.min(nearestLeft, nearestRight);

      sum += minHeight - cur;
      //    console.log("sum happens---",sum,minHeight - cur)
    }
  }
  return sum;
};








//manual first try solution
const maxTrapWaterSum = (arr) => {
  let maxHeight = arr[0];
  let sum = 0;
  let tempSum = 0;

  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = arr[i - 1];

    if (curr < maxHeight) {
      tempSum += maxHeight - curr;
    } else if ((curr == maxHeight && prev != curr) || curr > maxHeight) {
      maxHeight = curr;
      sum += tempSum;
      tempSum = 0;
    }

    console.log("data=>", {
      curr,
      prev,
      maxHeight,
      tempSum,
      sum,
    });
  }

  return sum;
};

// console.log(maxTrapWaterSum(arr));
console.log(bruteFroceTrapWater(arr));
