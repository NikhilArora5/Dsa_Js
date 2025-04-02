// JavaScript program to find Missing 
// and Repeating in an Array

function findTwoElement(arr) {
    let n = arr.length;

    // Creating frequency array of size n+1 with
    // initial values as 0. Note that array
    // values will go upto n, that is why we 
    // have taken the size as n+1
    let freq = new Array(n + 1).fill(0);
    let repeating = -1;
    let missing = -1;

    // Find the frequency of all elements.
    for (let i = 0; i < n; i++) {
        freq[arr[i]]=freq[arr[i]]+1;
    }

    for (let i = 1; i <= n; i++) {

        // For missing element, frequency
        // will be 0.
        if (freq[i] == 0) {
            missing = i;
        }

        // For repeating element, frequency
        // will be 2.
        else if (freq[i] == 2) {
            repeating = i;
        }
    }

    return [repeating, missing,freq];
}

let arr = [3, 1, 3];
let ans = findTwoElement(arr);

console.log(ans);
