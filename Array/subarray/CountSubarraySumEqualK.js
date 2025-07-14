const nums = [1];

const prefixSum = (nums, k) => {
  let prefixSum = 0;
  let count = 0;
  let n = nums.length;

  let preSumMap = new Map();

  preSumMap.set(0, 1); // Handle subarrays starting from index 0 if we igonre this then subbarray that starts from index0 and has sum k will be missed

  for (let i = 0; i < n; i++) {
    prefixSum += nums[i];

    let rem = prefixSum - k;

    if (prefixSum == k) {
      count++;
    }

    // preSumMap.set(prefixSum, i);

    if (preSumMap.has(rem)) {
      count = count - preSumMap.get(rem) || 0;
      preSumMap.set(prefixSum, preSumMap.get(rem) || 0 + 1);
      count += preSumMap.get(rem);
    }
  }

  return count;
};

console.log(prefixSum(nums, 0));
