/**
 * using Two pointer low and high approach using Mid value
 * calc mid value (diff for n=odd ,n=even)
 * then using logic 1.  low<Mid && high>Mid,2. ====>swapping with low nd high ,3.===> also then increment low and decrementing high
 * 
 */
let arr =[1,2,3,4,5,6,7]
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
console.log("----mid----",mid)
    while(low<mid && mid<high){
        let lowVal=arr[low]

        arr[low]=arr[high]
        arr[high]=lowVal

        low+=1
        high+=-1
    }

    
    

   console.log(arr)

}
let len=arr.length
reverserArr(arr,0,3)
reverserArr(arr,4,6)
reverserArr(arr,0,len-1)