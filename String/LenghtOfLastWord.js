var lengthOfLastWord_single_best = function(s) {
    let n = s.length - 1;
    let count = 0;

    while (n >= 0) {
        // if no white space increment count
        if (s[n] !== " ") {
            count++;
        } //else if whitespace encountered and count >o means we have encountered the last word
        else if (count > 0) {
            break;
        }
        n--;
    }

    return count;
};
var lengthOfLastWord_without_trim = function(s) {
    let n = s.length - 1;
    while (n >= 0 && s[n] === ' ') n--;

    let count = 0;
    while (n >= 0 && s[n] !== ' ') {
        count++;
        n--;
    }

    return count;
};
    

var lengthOfLastWord_1_trim = function (s) {
  let length = 0;

  //trim the outer whitespaces
  let trimmedStr = s.trim();



  //loop from last n-1 and count lenght till we fina a whitrspace and return lenght
  for (let i = trimmedStr.length - 1; i >= 0; i--) {
    if (trimmedStr[i] == " ") {
      return length;
    }
    length++;
  }

  return length;
};
