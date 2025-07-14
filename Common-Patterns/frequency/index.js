//*PROBLEM-1 */

// 1.Need ot compare two arrays and check if the leemsnts of arr 1 has their square in arr 2
// 2.Order does not matter but frequency does matters
let isArrayHasSquaredValue = () => {
  const arr1 = [1, 1, 2];
  const arr2 = [1, 4, 4];
   if(arr1.length !== arr2.length){
        return false;
    }

  //expected result of above false as the expected is [1,1,4] arr1 has two ones so two times square shoudl be available

  // 1.input => two arrays
  // 2.Logic => array comparison
  //  -Create a object/hashmap of the count of elemns in arr2 to track how many are available
  //  -loop through arr1 check if its square is present
  //  -if present decrement the count to chekc for the same nexrt element in arr1 just as the above case
  //  -if not return false
  //3.output=>boolean

  const hashmap = {};

  for (i of arr2) {
    console.log("i=>", i);
    hashmap[i] = hashmap[i] ? hashmap[i] + 1 : 1;
  }

  for (j of arr1) {
    let square = j * j;

    if (hashmap[square] >= 1) {
      hashmap[square] += -1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isArrayHasSquaredValue());



//*PROBLEM-2 */

//valid anagram

// same create two hashmaps looping over the string
//then again loop over any of the one string and then chec if both hashmap have equal counts