var longestCommonPrefix = function(strs) {
   if (strs.length === 0) return "";
    //we take the first string pf the array
    let firstStr=strs[0]


    //first loop for looping over the all character of the firstStr that we will compare
    for(let i=0;i<firstStr.length;i++){
     

        //we take the word of firstStr and then use i to to compare each char of that with other strings
        let word=firstStr[i]
        console.log("word",word)

        // for each char of firstStr we check everytime for otherStes in array that they are equal
       for(let j=0;j<strs.length;j++){
        console.log("word",word,strs[j][i])

        //if not equal or ay of the str is exhausted then return the susbstring till i
            if(word!=strs[j][i] || !strs[j][i]){
                return strs[0].substring(0,i)
            }
       }



    }


    // if we reached till here means the whole firststr was common
    return firstStr
};



// basic logic is a compare the each char of every string taking reference of the firstStr of the array
// like f->f , l-l, 0-0, w-w, till an un-mathched is encountered
const result=longestCommonPrefix(["flower","flow","flight"])
console.log('result',result)