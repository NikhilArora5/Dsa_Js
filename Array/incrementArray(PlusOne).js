let arr = [9];
arr = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
const incArray = (arr) => {
  let str = arr.join("");
  console.log("str", str);

  let incStr = (BigInt(str) + BigInt(1))
    .toString()
    .split("")
    .map((e) => Number(e));

  console.log("incStr", incStr);
  return incStr;
};

incArray(arr);


/**
 * var plusOne = function(digits) {
    for(let i =digits.length-1; i>=0 ; i--){
        if(digits[i] < 9){
            digits[i]++
            // console.log(digits)
            return digits
        }
        digits[i] = 0
    }
    // console.log(digits)
    digits.unshift(1)
    // console.log(digits)
    return digits
 */
