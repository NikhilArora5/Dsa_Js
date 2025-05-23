const arr_1 = [1, 3,5, 7];
const arr_2 = [0,2,6,8,9];

const mergeSortedArrays = (arr_1, arr_2) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let l1 = arr_1.length;
  let l2 = arr_2.length;

  let temp = new Array(l1 + l2);

  while (i < arr_1.length && j < arr_2.length) {
    if (arr_1[i] < arr_2[j]) {
      temp[k] = arr_1[i];
      i++;
    } else {
      temp[k] = arr_2[j];
      j++;
    }
    k++;
  }

  if (i < l1) {
    for (i; i < l1; i++) {
      temp[k] = arr_1[i];
      k++;
    }
  }

  if (j < l2) {
    for (j; j < l2; j++) {
      temp[k] = arr_2[j];
      k++;
    }
  }

  return temp;
};

console.log(mergeSortedArrays(arr_1, arr_2));
