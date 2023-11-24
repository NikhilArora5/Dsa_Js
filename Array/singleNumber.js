/**
 * In a array ech element is twice check if there is any single element
 * 
 * TO understand xor : https://www.omnicalculator.com/math/xor
 */

let arr=[1,1,2,2,3,4,4]
const checkSingleNumber=(arr)=>{

    let result=arr[0]

    for (let i=1;i<arr.length;i++){
        console.log(`      result :${result}  ^  ${arr[i] } ====> ${result^arr[i]}  `)
     result=result^arr[i]
    //  console.log('----After--result==========================>',result)
    }
    console.log('----FINAL--result==========================>',result)
}

// checkSingleNumber(arr)

console.log("-----------xor-",3^4)