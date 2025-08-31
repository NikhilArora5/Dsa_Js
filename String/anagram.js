/**
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */

var isAnagram = function(s, t) {
      if (s.length !== t.length) return false;
  
      let map = {};
  
      //creat cut hashmap of one
      for (let i = 0; i < s.length; i++) {
          if (!map[s[i]]) {
              map[s[i]] = 1;
          } else {
              ++map[s[i]];
          }
      }
  

      //then check the cout of senond one iwht hashmap
      for (let i = 0; i < t.length; i++) {
          if (!map[t[i]] || map[t[i]] === 0) {
              return false;
          } else {
            //keep decrmenting cout when a key is doun in map
              --map[t[i]];
          }
      }
  
      return true;
  };




const isAnagram = (str1, str2) => {
  let str1Freq = new Map();
  let str2Freq = new Map();

  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1Freq.has(str1[i])) {
      str1Freq.set(str1[i], str1Freq.get(str1[i]) + 1);
    } else {
      str1Freq.set(str1[i], 1);
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (str2Freq.has(str2[j])) {
      str2Freq.set(str2[j], str2Freq.get(str2[j]) + 1);
    } else {
      str2Freq.set(str2[j], 1);
    }
  }

  for (let e of str1Freq.keys()) {
    if (str1Freq.get(e) !== str2Freq.get(e)) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagran", "nagaram"));
