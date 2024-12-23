

/**
 * Not a right solution requires inital value for fib
 * My try to solve using recursion 
 * Conceot was to first have a initial FIb =[0,1] which can be passsed as argument as in recusrion can initialize the value because the sme function will run
 * genFIb(6) shpudl genderate a fib sequence of lenght 6
 * Output requires is
 * 
 * @param {*} n 
 * @returns 
 */



const getFibSequence = (n,fib) => {
  let fib
  let length = fib?.length;
  if (n <= 1 || length<=2) {
    fib=[0,1]
    return fib;
  }

  //adding the last element as the sum of last two
  fib[length]= fib[length - 1] + fib[length - 2];

  // if the last element is equal to  sum its last twoprecedding and is equal to the given input number then return the sequence
  if (fib.length == n) {
   
    return {fib , number:fib[length] };
  }


  //keep callin the same function imp is to return th result of the recursive fucntion
  return getFibSequence(n, fib);
};
let fib = [0, 1];
const result = getFibSequence(9);
console.log("getFibSequence=>", result);
