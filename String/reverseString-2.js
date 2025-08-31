

//------------------Optimised--------------------
//Time=O(n)
// space =O(n)
var reverseStr = function(s, k) {
    //first split the str in to an array
    let arr = s.split("");  // O(n)


    //loop using the incement i+2*k
    for (let i = 0; i < arr.length; i += 2 * k) {
        let start = i;
        let end = Math.min(i + k - 1, arr.length - 1);


        //reverse using start and end indices
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // O(1)
            start++;
            end--;
        }
    }


    //convert the arr to str
    return arr.join("");  // O(n)
};


















//Approahc same but not the optimised code written

const reverse = (string, start, end) => {
    let arr = string.split("");
    let l = Math.max(0, start); // ensure l >= 0
    let h = Math.min(end, arr.length - 1); // ensure h < length

    while (l < h) {
        // Only swap if both indices are valid
        if (arr[l] !== undefined && arr[h] !== undefined) {
            [arr[l], arr[h]] = [arr[h], arr[l]];
        }
        l++;
        h--;
    }

    return arr.join("");
};


var reverseStr = function(s, k) {
    let str=s


    // run a loop from i=0 to incrmenting by 2*k so that it reaches the index everytime which needs to be reversed
    // and pass indices to the reverse function
    // reverse function takes str, start ,end and returns  a str by reversin the give indoces value 
    // in reverse function while swapping make sure to handle index out of bound edge cases
    for(let i=0;i<str.length;i=i+2*k){

        str=reverse(str,i,i+k-1)
    }


    return str
};


console.log(reverseStr("abcdefg",2))