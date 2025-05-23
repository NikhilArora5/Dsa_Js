/**
 *
 * @param {*} arr
 * @returns
 * we cant sort
 */
const buySellProfit = (arr) => {
  let maxProfit = 0;
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let profit = arr[i] - min;
    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
};

const maxProfit = (arr) => {
  let min = arr[0];
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    res = Math.max(res, arr[i] - min);
  }

  return res;
};
