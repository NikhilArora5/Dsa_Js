const integer=-123

const reverseInteger=(num)=>{

   const reverseNumber=Number( Math.abs(num).toString().split("").reverse().join(""))

   if(num)
   return reverseNumber
}

console.log(reverseInteger(integer))