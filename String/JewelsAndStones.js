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
