const nums = [1, 1, 1, 1, 1, 1];
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      if (maxCount < count) {
        maxCount = count;
      }
      count = 0;
    }

    if (maxCount < count) {
      maxCount = count;
    }
  }

  return maxCount;
};

console.log(findMaxConsecutiveOnes(nums));
