var fib = function (n) {
    let a = 0;
    let b = 1;
    if (n == 0 || n == 1) return n;
  
    for (i = 2; i < n + 1; i++) {
      [a, b] = [b, a + b];
    }
  
    // console.log(b)
  
    return b;
  };
  
  const a = fib(3);
  console.log(a);