
//TIme = o(m*n)  m lemght of array, n lenght of each characet in arr
// space= o(k) no of idices stored

var findWordsContaining = function(words, x) {
    let res = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                res.push(i);
                break;
            }
        }
    }
    return res;
};

var findWordsContaining = function(words, x) {
    let result=[]
    for(let i=0 ;i<words.length;i++){


        // or use another loop within and
        if(words[i].includes(x)){
            result.push(i)
        }
    }

    return result
    
};