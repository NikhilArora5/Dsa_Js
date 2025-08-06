
// important things 
// given string is a balanced stirng means rcount=lcount
//Time=>O(n) space+>1 both below solutions



var balancedStringSplitMoreBetter = function (s) {
  let balanceCount=0
  let resultCount = 0;  // final result of how much balace splists are possibe


  //loop through eleensts
  for (i of s) {

    //increment balanceCount when R  and  decrement when l 
    if (i == "R") {
      balanceCount++;
    } else if (i == "L") {
      balanceCount--;
    }


    // when balanceCount=0 means at this point both R and L ar equal
    if (balanceCount==0) {
      resultCount++;
     
    }
  }

  return resultCount;
};



var balancedStringSplit = function (s) {
  let r_count = 0;  // for R count
  let l_count = 0; // for L count
  let resultCount = 0;  // final result of how much balace splists are possibe


  //loop through eleensts
  for (i of s) {

    //update r and l counts when encountered
    if (i == "R") {
      r_count++;
    } else if (i == "L") {
      l_count++;
    }


    // when in any iteration or point both counts are equal means we have acaputre a balanced pair 
    // so update the resultCOunt and reset the r and l counts ot find  anew pair
    if (r_count == l_count) {
      resultCount++;
      r_count = 0;
      l_count = 0;
    }
  }

  return resultCount;
};
