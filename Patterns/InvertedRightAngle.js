/**
 * Example n=3
 *     *
 *     * *
 *     * * *
 *
 * Logic : Patter here is  basically the no of rows is equal to n mandatory
 * Outer loop will manage the no of rows
 * The inner loop will manage the column pattern
 */


// SOLUTION 1
let prompt = require("prompt-sync")();
const printInvertedRightAngleTraingle = () => {
  let n = prompt("Enter a number");

  // start from the N go till zero it will print and manage n rows but also will proivde the values to inner loop in descending order which is required for the column pattern
  for (let i = n; i > 0; i--) {

    //same for inner loop use j=n go till zero and print
    for (let j = i; j > 0; j--) {
      process.stdout.write(" * ");
    }
    console.log();
  }
};
printInvertedRightAngleTraingle();



// SOLUTION 2
