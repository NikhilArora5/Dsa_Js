//SOLUTION-1

var canPlaceFlowers = function (flowerbed, n) {
  //can usieierher of it
  //   flowerbed.push(0);
  //   flowerbed.unshift(0);

  flowerbed = [0, ...flowerbed, 0];

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i - 1] == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
      flowerbed[i] = 1;
      n += -1;
    }
  }

  return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 1], 4));

//SOLUTION-2 using the algo

var canPlaceFlowers = function (flowerbed, n) {
  let empty = flowerbed[0] == 0 ? 1 : 0; //checking if we have an empty space at the begning and initializing emtpy as 1

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i]) {
      //Now we have enountered a flowe so check with exisiting empty spaces the possible flowers that can be planted
      //Formula empty-1/2 3 spaces one possibiltiy before a flower
      let possibleFlowers = Math.floor(Math.max(0, empty - 1) / 2);
      n += -possibleFlowers;
      empty = 0;
      //after evry flower encounter make empty=0
    } else {
      empty += 1;
    }
  }

  console.log("n here", n);
  // At last check if we have any empty space and check
  //here formula will be empty/2 as it is in last so if 2 spaces avalaible then on possibiltiy
  let possibleFlowers = Math.floor(empty / 2);
  n += -possibleFlowers;



  return n <= 0;
};
