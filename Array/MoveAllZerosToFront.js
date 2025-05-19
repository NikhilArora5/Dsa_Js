/**
 * The Two Pointer approach i and j
 * Keep the i incrementing and i will check when a zero is encountered in that case swap the arr[j] and arr[i]
 * j will keep track of the last zero index and will only increment when i=0
 */

const arr = [1, 0, 1, 1, 0, 0, 1, 0];

const moveZerosToFront = (arr) => {
  let i = 0;
  let j = 0;

  // jab tak n chekc till ne may need to swap the n-1
  while (i < arr.length) {
    if (arr[i] == 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
    i++;
  }
  return arr;
};

console.log(moveZerosToFront(arr));

/**
 * same concept Problem move all negative to left
 *
 */
const mixedarr = [1, 0, -1, 2, -3, 5, -6, 9, 10, -19, -4];

const moveNegativeToleft = (arr) => {
  let i = 0;
  let j = 0;

  // jab tak n chekc till ne may need to swap the n-1
  while (i < arr.length) {
    if (arr[i] < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
    i++;
  }
  return arr;
};
console.log(moveNegativeToleft(mixedarr));
