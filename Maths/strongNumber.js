const getFactorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact* i;
  }



  return fact;
};

const isStrongNumber = (n) => {
  let dupOfNumber = n;
  let sum = 0;
  while (n > 0) {
    const lastDigit = n % 10;

    const factOfDigit = getFactorial(lastDigit);

    sum += factOfDigit;
    n=Math.floor(n/10)

  }

  
  if(sum==dupOfNumber){
    console.log("Strong Number")
  }else{
    console.log("Not a Strong Number")
  }
};

isStrongNumber(40585)
