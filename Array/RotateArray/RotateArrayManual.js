/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100
 */

    // SOLUTION==>1 taking extra space 
let arr =[99,-1,-100,3]
let k=2


    const rotateRight=(arr,k)=>{
      let n= arr.length
      let x=n-k
      console.log("---------X",x)

      let finalArr=[]

      for(let i=x;i<n;i++){
         console.log("-----i",arr[i])
         finalArr.push(arr[i])
      }
      for(let i=0;i<x;i++){
         console.log("-----j-----------------------",arr[i])
         finalArr.push(arr[i])
      }

      console.log('------output:',finalArr)
    }



    

// SOLUTION==>2 taking no extra space Buttime limit exceed error
    const rotateRight2=(arr,k)=>{
      console.log('-orig-arr----',arr ,"--k:",k)
      let n= arr.length
      let x=n-k
     for (let i=0; i<k;i++){

      let lastPoped=arr.pop()
      // console.log("lastPoped",lastPoped)
      // arr.splice(0,0,lastPoped)
      // arr.unshift(lastPoped)
     }
      console.log('---rotated-arr----',arr)
     
    }

   //  rotateRight2(arr,k)

   //  SOLUTION==>3 aux space constant and using reverse function

   const rotateRightWithReverse=(nums,k)=>{
      console.log('--------ORIG',nums,"------------K:=",k)
      let n= nums.length
      let x=n-k

      reverserArr(nums,0,x-1)
      // reverserArr(nums,x,n-1)
      // reverserArr(nums,0,n-1)

      console.log('--------------FINAL ARR',nums)


   }




   

   // Try this clean reverArrTwoPointer approach 
   const reverArrTwoPointer = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];

    i += 1;
    j += -1;
  }

  console.log("reversed Arr", arr);
};
   const reverserArr=(arr,startIdx,endIdx)=>{
      let n=endIdx-startIdx+1
      let low=startIdx
      let high=endIdx
      let mid=0
  
      
      if(n%2==0){
          mid=n/2
      }
      else{
          mid=(n-1)/2
          if(low>mid){
              mid+=low
          }
      }
  console.log("---idxs",{
   mid,low,high,n
  })
      while(low<mid && mid<high){
          let lowVal=arr[low]
  
          arr[low]=arr[high]
          arr[high]=lowVal
  
          low+=1
          high+=-1
      }
  
      
      
  
      console.log('--------------Reverserd ARR',arr)
  
  }

  rotateRightWithReverse(arr,k)