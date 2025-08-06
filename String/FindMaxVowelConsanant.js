// Time => O(n)
// space => O(k) k is the unique letters present tin the string  tos tore in hashmap

var maxFreqSumBetter = function (s) {
  //use only one map  to tores
  let HashMap = new Map();

  for (i of s) {
    if (HashMap.has(i)) {
      HashMap.set(i, HashMap.get(i) + 1);
    } else {
      HashMap.set(i, 1);
    }
  }


  let maxVowel = 0;
  let maxConsonant = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  HashMap.forEach((val, key) => {
    // .includes as constant only 5 vowels
    if (vowels.includes(key)) {
      maxVowel = Math.max(maxVowel, val);
    } else {
      maxConsonant = Math.max(maxConsonant, val);
    }
  });

  return maxConsonant + maxVowel;
};

var maxFreqSum = function (s) {
  let vowelHashMap = new Map();
  let consonantHashMap = new Map();

  for (i of s) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      if (vowelHashMap.has(i)) {
        vowelHashMap.set(i, vowelHashMap.get(i) + 1);
      } else {
        vowelHashMap.set(i, 1);
      }
    } else {
      if (consonantHashMap.has(i)) {
        consonantHashMap.set(i, consonantHashMap.get(i) + 1);
      } else {
        consonantHashMap.set(i, 1);
      }
    }
  }

  console.log("ahshes", vowelHashMap, consonantHashMap);

  let maxVowel = 0;
  let maxConsonant = 0;

  vowelHashMap.forEach((val) => {
    maxVowel = Math.max(maxVowel, val);
  });

  consonantHashMap.forEach((val) => {
    maxConsonant = Math.max(maxConsonant, val);
  });

  return maxConsonant + maxVowel;
};

console.log(maxFreqSum("successes"));
