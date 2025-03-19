/*Solution 1
1. for first non repeating value < m.get(res)
2. for last non Repeating
 */


let str2 = "geeksforgeeks";
let m = new Map();
let res = null;
for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (m.has(char)) {
        m.set(char, -1);
    } else {
        m.set(char, i);
    }
}

m.forEach()
m.forEach((value, char) => {
  console.log("data",{
    value,char
  })

  if (
    value !== -1
    &&
    (res === null || value < m.get(res))
) {
    res = char;
}
});



/*
Solution 2

Your function fails to get the last non-repeating character because it iterates over the object hashMap, and object properties do not maintain the order of insertion.

Fix:
Instead of looping through the hashMap, iterate backward through the original string array and return the last character with a count of 1.

Note Don't loop over a hashmap/Object as they dont maintain the insertion order 
*/

const string = "hhhejhjhjjhdsbiib";

const lastNonRepeatingCharacter = (string) => {
  const hashMap = {};

  const arr = string.split("");

  // Count occurrences
  for (let i = 0; i < arr.length; i++) {
    hashMap[arr[i]] = (hashMap[arr[i]] || 0) + 1;
  }

  // Find the last non-repeating character by iterating backward
  for (let i = arr.length - 1; i >= 0; i--) {
    if (hashMap[arr[i]] === 1) {
      return arr[i]; // Return immediately when found
    }
  }

  return null; // Return null if no non-repeating character exists
};

console.log(lastNonRepeatingCharacter(string)); // Expected Output: "d"
