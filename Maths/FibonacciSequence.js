
// solution 1
const getFibonacciSequence = (n) => {
  const sequnce = [];

  for (let i = 0; i < n; i++) {
    let nextElement;
    console.log("i", i);
    if (i < 2) {
      nextElement = i;

      console.log("nextElement", i);
    } else {
      nextElement = sequnce[i - 1] + sequnce[i - 2];
      console.log("nextElement", nextElement);
    }

    sequnce.push(nextElement);

    console.log("-----------------");
  }

  console.log("sequnce", sequnce);
};

getFibonacciSequence(10);


// solution 2
const getFibonacciSequence2=(n)=>{
    let fib=[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}






/*
Note:
In the first solution, we use a loop to generate the Fibonacci sequence up to the given number 'n'.
In the second solution, we use an array to store the Fibonacci sequence up to the given number 'n'. This approach is more efficient when generating large Fibonacci numbers.

Both solutions have a time complexity of O(n) because they iterate 'n' times to generate the Fibonacci sequence.
*/
