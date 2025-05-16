/**
 * Example n=4
 *     A
 *     A B
 *     A B C
 *
 * Logic : Patter here is  basically the no of rows is equal to n mandatory
 * Outer loop will manage the no of rows
 * The inner loop will manage the column pattern
 *
 * Main thing is CharCodeAt and FromCharCode
 */

let prompt = require("prompt-sync")();
const printPattern = () => {
  let n = prompt("Enter a number");

  for (let i = 0; i < n; i++) {

    //Main Logic Point-1
    let firstChar = "A";
    let asciiCode = firstChar.charCodeAt(firstChar);

    for (let j = 0; j <= i; j++) {

     //Main Logic Point-2
      let charToPrint = String.fromCharCode(asciiCode);

      process.stdout.write(charToPrint + " ");

      asciiCode++;
    }

    console.log();
  }
};

printPattern();
