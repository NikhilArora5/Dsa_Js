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

let prompt = require("prompt-sync")();
const printRightAngleTraingle = () => {
  let n = prompt("Enter a number");

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write(" * ");
    }
    console.log();
  }
};
printRightAngleTraingle()
