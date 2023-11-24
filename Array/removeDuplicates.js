/*
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores)

*/
let nums = [1, 1, 2];
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// nums=[0,0,1,1,2]

const removeDup = (nums) => {
  let idx = 0;
  let n = nums.length;
  if (n == 0) return 0;
  for (let i = 0; i < n; i++) {
    if (nums[idx] != nums[i]) {
      // incrementing the idx whenever we get the case of not equal
      idx += 1;

      // Now we replace the element at  nums[idx] with nums[i] as not equal
      nums[idx] = nums[i];

      // important thing to note is we dont swap values in this problem approach
    }
  }

  console.log("nums :", nums);
  // console.log("OUTPUT :",nums.splice(0,5))

  // console.log("n-idx+1 :",n-idx+1)

  // at the end we return idx+1 as length of unique elemnst in array
  return idx + 1;
};

// let k = removeDup(nums);

// console.log("----------K-----", k);

// -----------------------------------------------PROBLEM 2------------------------------------------
/*
Example :

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/


const removeDup2 = (nums) => {
  let idx = 1;
  let n = nums.length;
  if (n == 0) return 0;
  for (let i = 0; i < n; i++) {

    if(n<3){
      console.log("nums :", nums);
      return n
    }

    if (nums[idx] != nums[i] ) {

      if(i==0 && idx==1){

        idx=0
      }else{
         // incrementing the idx BY 2  HERE AS 2 DUPLICATES ARE ALLOWED  whenever we get the case of not equal
      if(nums[i]==nums[i+1]){
        
        idx += 2;
        nums[idx-1] = nums[i];
        nums[idx] = nums[i+1];
      }else{
        idx+=1
        // i+=1
        nums[idx] = nums[i];
      }
      }
     
     

      // Now we replace the element at  nums[idx] with nums[i] as not equal
     

      // important thing to note is we dont swap values in this problem approach
    }
  }

  console.log("nums :", nums);
  
  // at the end we return idx+1 as length of unique elemnst in array
  return idx + 1;
};


nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
nums =[0,0,1,1,1,1,1,2,2,2,3,3]
nums =[0,0,1,1,1]
console.log("---originanl arr",nums)

let k2 = removeDup2(nums);

console.log("----------K2-----", k2);

/**
 * BETTER APPROACH AND CAN BE USED FOR N SKIPPING
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  if(nums.length <= 2) {
        return nums.length;
    }
    // Initialize an integer k that updates the kth index of the array...
    // only when the current element does not match either of the two previous indexes...
    let k = 2;
    // Traverse elements through loop...
    for(let i = 2; i < nums.length; i++){
        // If the index does not match the (k-1)th and (k-2)th elements, count that element...
        if(nums[i] != nums[k - 2] || nums[i] != nums[k - 1]){
            nums[k] = nums[i];
            k++;
        // If the index matches the (k-1)th and (k-2)th elements, we skip it...
        }
    }
    return k;  
    
}


// -----------------------------------------------PROBLEM 3------------------------------------------


      
/***Contains Duplicate
 * we can create object in javascri
 * pt and in JS object key will always be unique in nature so we can story array element as key in object and check if key exists already means element is duplicated.
 */


var containsDuplicate = function(nums) {
    let hashMap = {};
    
    for(let i=0;i<nums.length;i++){
        if(hashMap[nums[i]]){
            return true;
        }else{
            hashMap[nums[i]]=true
        }
    }
    return false
    
};