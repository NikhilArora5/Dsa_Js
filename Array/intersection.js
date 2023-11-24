 /**
  * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

  */



// SOLUTION
let nums1 = []
let nums2 = [2,2]


const interSectArr=(nums1,nums2)=>{

  let countObj={}

  let finalArr=[]
if(nums1.length ==0 || nums2.length==0){
  console.log("-final",finalArr)
  return []
}
  for (i of nums1){
    if(countObj[i]){
      countObj[i]+=1
    }else{
      countObj[i]=1
    }
   
  }

  console.log("-countObj",countObj)


  for (i of nums2){

    if(countObj[i]>=1){
      finalArr.push(i)


      // ******KEY LOGIC IS TO DECRMENT COUNT AFTER EVERY PUSH OF THAT NUMBER
      countObj[i]+=-1
    }
  }


  console.log("-final",finalArr)

}


interSectArr(nums1,nums2)