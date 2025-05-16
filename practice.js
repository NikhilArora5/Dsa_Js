const arr = [5, 1, 3, 7, 2];

const sorted = arr.sort((a, b) => b - a);

// console.log("sorted",sorted)

//array should be sorted

const binarySearch = (arr, n) => {
  let l = 0;
  let h = arr.length - 1;

  if (h == 0) {
    return h;
  }
  while (l <= h && h !== 0) {
    let mid = Math.floor(h + l / 2);

    if (arr[mid] == n) {
      return mid;
    } else if (n < arr[mid]) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
};

const arrDuplicates = [1, 2, 2, 3, 4, 4, 4, 5, 5];

const removeDuplicates = (arr) => {
  let idx = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      arr[idx] = arr[i];
      idx += 1;
    }
  }

  return [idx - 1, arr];
};

// console.log(removeDuplicates(arrDuplicates))

const string = "reverse";

const reverseString = (str) => {
  const strArr = string.split("");

  let l = 0;
  let h = str.length - 1;

  //   while (l < h) {
  //     [strArr[l], strArr[h]] = [strArr[h], strArr[l]];
  //     l = l + 1;
  //     h = h - 1;
  //   }
  while (l < h) {
    [str[l], str[h]] = [str[h], str[l]];
    l = l + 1;
    h = h - 1;
  }

  for (i of str) {
    console.log("i", i);
  }

  //   return strArr.join("")
  return str;
};

// console.log(reverseString(string));

const maxProfit = (arr) => {
  let min = arr[0];
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    console.log("min", min);

    result = Math.max(result, arr[i] - min);
    console.log(result, arr[i] - min, arr[i]);
  }

  if (!result) {
    return 0;
  }

  return result;
};

const arr_1 = [1, 3, 6, 9, 11];

// console.log(maxProfit(arr_1))

const titleCaseManual = () => {
  const str = "nikhil arora";
  const strArr = str.split("");
  const n = str.length;
  for (let i = 0; i < n; i++) {
    console.log(
      strArr[i] == " " && strArr[i + 1] !== " ",
      strArr[i],
      strArr[i + 1]
    );
    if (i == 0) {
      strArr[i] = strArr[i].toUpperCase();
    } else if (strArr[i] == " " && strArr[i + 1] !== " ") {
      strArr[i + 1] = strArr[i + 1].toUpperCase();
      i += 1;
    }

    // console.log("word=>",str[i])
  }

  console.log(strArr.join(""));
};
const str = "nikhil   arora";
const titleCaseGpt = (str) => {
  return str
    .split(" ") // Split by spaces
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" "); // Join back into a string
};

// console.log(titleCaseGpt(str));



const findLongestWord = (sentence) => {
  let wordsArray = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
}
  console.log(longestWord);
};
// findLongestWord("Hi Iam Saikrishna Iam a UI Developer");

// console.log(string.concat(" "*5))
console.log(" ".repeat(5).concat("hello"));

