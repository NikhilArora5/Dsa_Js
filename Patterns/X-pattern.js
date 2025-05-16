/**
 * Use base Pattern and then
 * Pattern Here
 * i+j=n+1
 * i==j
 * Print the * otherwise empty
 */
let promt = require("prompt-sync")();
const xPattern = () => {
  let n = Number(promt("Enter a number: "));

  // important to check as n is used for addiiton below
  if (isNaN(n)) {
    console.log("Enter a validd Number");
    return;
  }

  // outer loop for the row to enter and manage how many rows
  for (let i = 1; i <= n; i++) {
    //inner loop to print the data/columns in a row
    for (let j = 1; j <= n; j++) {
      if (i == j || i + j == n + 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }

    // After each outer iteration to jump to new/next line use empty log
    console.log();
  }
};
xPattern();
