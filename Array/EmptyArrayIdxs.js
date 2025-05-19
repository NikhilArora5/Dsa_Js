const arr=[]
arr[1]=5
arr[2]=6
arr[7]=7

console.log("Array: ",arr)

for(let i in arr){
    console.log("arr item",i)
}


for(let j of arr){
    console.log("j item",j)
}