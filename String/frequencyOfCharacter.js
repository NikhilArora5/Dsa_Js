const str = "takeuforward";
const calculateFrequency = (string) => {
  //   let str = str2.split('').sort((a, b) => (a.charCodeAt(0) - b.charCodeAt(0)));
  let str = string;
  let res = "";

  let freqArray = new Array(128).fill(0);

  for (let i = 0; i < str.length; i++) {
    //incrment the freq at that ascci index of the array
    freqArray[str[i].charCodeAt(0)]++;

    //   console.log("freqArray[str[i].charCodeAt(0)]",freqArray[str[i].charCodeAt(0)],str[i],str[i].charCodeAt(0))
  }

  for (let j = 0; j < freqArray.length; j++) {
    if (freqArray[j]) {
      res += String.fromCharCode(j) + freqArray[j] + " ";
    }
  }

  return res;
};

console.log(calculateFrequency(str));
