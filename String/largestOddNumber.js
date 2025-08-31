// Approach 

/**
 * 1.We need to return the largest odd substring
 * 2. We start from the last reverse loop the string
 * 3. and check each char num[i]%2 whther odd or even ,if odd we got the longest susbstring
 * 4. we return the susbstring where we found that odd number/char
 * 5. TIME : O(n)
 * 6. SPACE :O(1)
 *  
 */

var largestOddNumber = function (num) {
  let i = num.length-1;
  

  while (i >= 0) {
    if (parseInt(num[i]) % 2 !== 0) {
      return num.substring(0, i + 1);
    }
    i--;
  }

}

var largestOddNumberTrie = function (num) {
  let maxOdd = "";

  for (let i = 0; i < num.length; i++) {
    // Check if current digit is odd
    if (parseInt(num[i]) % 2 !== 0) {
      // Compare substrings lexicographically
      const currentSubstring = num.substring(0, i + 1);
      if (
        maxOdd === "" ||
        currentSubstring.length > maxOdd.length ||
        (currentSubstring.length === maxOdd.length && currentSubstring > maxOdd)
      ) {
        maxOdd = currentSubstring;
      }
    }
  }

  return maxOdd;
};
console.log(largestOddNumber("52"));
