const n = 2446;

const countDigits = (num) => {
    let count = 0;

    for (let digit of num.toString()) {
       
        if(num%Number(digit)==0){
            count++;
        }
        
    }
    return count;
};

console.log("Total Digits:", countDigits(n)); 
