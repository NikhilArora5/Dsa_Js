const string="the sky is blue"

const reverseString=()=>{

   return  string.trim().split(" ").reverse().join(" ")

}

console.log(reverseString(string))