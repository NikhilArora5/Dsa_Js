/**
 * Example n=3
 *        *
 *      * *
 *    * * *
 *
 *
 *
 *
 * Logic : Patter here is  basically the no of rows is equal to n mandatory
 * Outer loop will manage the no of rows
 * The inner loop will manage the column pattern
 *
 * 1. repeat  use console.log(" ".repeat(5).concat("hello"));
 * 2.usig if in loops
 * 3. usign the combination approach
 */

// Solution1 using repeat and concat O(n)
let prompt = require("prompt-sync")();

const printMirrorTriangle = () => {
  let n = prompt("Enter a number");

  for (i = 1; i <= n; i++) {
    const emptySpace = " ".repeat(n - i);
    const stars = "*".repeat(i);
    process.stdout.write(emptySpace.concat(stars));
    console.log();
  }
};

// printMirrorTriangle()

// Solution 2 using repeat and concat O(n)
const printMirrorTriangle2 = () => {
  let n = prompt("Solution 2 Enter a number");

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      if (j <= n - i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*");
      }
    }

    console.log();
  }
};
// printMirrorTriangle2()

// solution 3 logic combination of inverted and right angle triangle

const printMirrorTriangleUsingCombination = () => {
  let n = prompt("Solution 3 Enter a number: ");

  for (let i = 1; i <=n; i++) {
    
    //inverted
    for (let j = 1; j <= n-i; j++) {
      process.stdout.write(" ");
    }

    //right angle
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }

    //new line
    console.log()
  }
  
};

printMirrorTriangleUsingCombination();
