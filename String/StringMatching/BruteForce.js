const string = "abedfrabedgo";
const pattern = "abe";

const checkIspattern = (str, pattern) => {
  let m = pattern.length;
  let n = str.length;

  for (let i = 0; i < n; i++) {
    if (str[i] == pattern[0]) {
      let j = i + 1;
      let k = 1;

      while (k < m && j < n - 1) {
        if (str[j] == pattern[k]) {
          j++;
          k++;
        } else {
          break;
        }
      }

      if (k == m) {
        console.log("--Mathhed Here--", { i, j, k });
        return true
      }
    }
  }

  return false
};

console.log(checkIspattern(string, pattern));
