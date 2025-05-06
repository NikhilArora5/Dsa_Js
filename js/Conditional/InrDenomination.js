
let number = 4812;
// tell the frequency of notes will be used going from 500 to 10 


/**
 * 
 *Solution 2 using if and else conditional only
 */

 const getContionalNotesCount = (number) => {
    let remainingValue = number;
    let remainder=0
    const result = {};

     remainder = remaingValue % 500;
     remaingValue = remainder;
     result[500] = numOfNotes;

     if(remainder){
        remainder = remaingValue % 200;
     remaingValue = remainder;
     result[200] = numOfNotes;

     }}



    






/**
 * 
 *Solution 1 using loop and array and hashmap
 */
const availableNotes = [500, 200, 100, 50, 20, 10];
const getNotesCount = (number) => {
  let remaingValue = number;
  const result = {};

  availableNotes.map((note) => {
    let remainder = remaingValue % note;
    let numOfNotes = Math.floor(remaingValue / note);
    remaingValue = remainder;

    result[note] = numOfNotes;

    if (remainder == 0) return;
  });

  if (remaingValue) {
    result[remaingValue] = 1;
  }
  console.log("availableNotes", result);
};

getNotesCount(number);



/**
 * 
 *Solution 3 chatgpt
 🔍 Benefits:
Uses for...of → more efficient and semantically correct than .map() or .forEach() for this use case.

Skips assigning zero-count notes → cleaner output.

Handles any leftover amount clearly.
 */


const getNotesCounGpt = (number) => {
  let remaining = number;
  const result = {};

  for (const note of availableNotes) {
    const count = Math.floor(remaining / note);
    if (count > 0) {
      result[note] = count;
      remaining -= count * note;
    }
  }

  if (remaining > 0) {
    result[remaining] = 1; // for leftover amount not covered by notes
  }

  console.log("Notes breakdown:", result);
};

