const printfromNTwoOne = (n) => {
  // 5,4,3,2,2,1

  //base casen==0
  if (n == 0) {
    return;
  }
  console.log(n);

  printfromNTwoOne(n - 1);
};



function printOneToNRecursion(n) {
    if (n < 1) {
        return;
    }
    printOneToNRecursion(n - 1); // Recursive call first (to print 1 to n-1)
    console.log(n); // Then print n
}

printOneToNRecursion(5);

// printfromNTwoOne(5);

// printfromOneTwoN(5);
