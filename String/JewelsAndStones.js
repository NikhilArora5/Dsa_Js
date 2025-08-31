

//constant extra space
//Tm
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) {
                ++count;
                break;
            }
        }
    }
    return count;
};

//usiing hash map
var numJewelsInStones = function (jewels, stones) {
  const hash = new Map();
  let count = 0;

  for (let i of jewels) {
    if (hash.has(i)) {
      hash.set(i, hash.get(i) + 1);
    } else {
      hash.set(i, 1);
    }
  }

  for (j of stones) {
    if (hash.has(j)) {
      count++;
    }
  }



  return count;
};

numJewelsInStones("aAAB", "aa");
