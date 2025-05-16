let promt = require("prompt-sync")();
// let a = promt("Enter a number")

/**
 * Enter a number n and it shoudl print a pattern of nXn
 * Ex: 3
 *    * * *
 *    * * *
 * Empty log console.log(): will take us to the new line
 * process.stdout.write()   will be used to print horizontally
 *
 */

// solution/concept
const basicPrintConcept = () => {
  let n = promt("Enter a number");

  // outer loop for the row to enter and manage how many rows
  for (let i = 0; i < n; i++) {
    //inner loop to print the data/columns in a row
    for (let j = 0; j < n; j++) {
      process.stdout.write(" * ");
    }

    // After each outer iteration to jump to new/next line use empty log
    console.log();
  }
};

// basicPrintConcept();
