const nums = [2, 2, 1, 3, 3, 8, 2];

const MajoritElementMoore = (arr) => {
  let ans = arr[0];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      ans = arr[i];
      count=1;
    } else if (ans == arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  return ans;
};

console.log(MajoritElementMoore(nums))


