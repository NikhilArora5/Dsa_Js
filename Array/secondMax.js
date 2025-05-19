const arr = [10, -1, 40, 50, 45];

const findSecondMax = (arr) => {
  let max = arr[0];
  let secondMax = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {

      //if we got a new max immediately update the second max
      secondMax = max;
      max = arr[i];
    }
    //to check if we may not get a new max but may get a second max
    // example arr const arr = [10, -1, 40, 50, 45]; max=40, when max updated to 50 second max =40 , but next time max will not update but we have 45 as second  max
    else if (arr[i] > secondMax && arr[i] != max) {
      secondMax = arr[i];
    }
  }
  console.log({ max, secondMax });
};

findSecondMax(arr);
