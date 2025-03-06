const binarySearch = (n) => {
  const array = [-1,0,3,5,9,12]
  let l = 0;
  let h = array.length - 1;
  console.log("h", h);
  

  if (h == 0) {
    if (array[h] == n) {
      return h;
    }
  }

  while (l < h && h !== 0) {
    let mid = (h - l) / 2 + l;
    mid = mid > 1 ? Math.ceil(mid) : Math.floor(mid);
    // console.log("counter---", counter);
    console.log("mid", { mid, midValue: array[mid], h, l });
    

    if (array[mid] == n) {
      console.log("FOUND", mid, array[mid]);
      return mid;
    }

    if (n > array[mid]) {
      l = mid;
    } else {
      h = mid;
    }
    console.log("");
  }
  console.log("not foud");

  return -1;
};
binarySearch(2);
