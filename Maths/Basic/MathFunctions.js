/*
 * Area of triangle by heron's formula 
 * consition checking is required
 * a+b>c a+c>b b+c>a
 */ 

let a=10
let b= 20
let c= 25

let s=( a+b+c)/2
console.log("s",s)


let area= Math.sqrt(s*(s-a)*(s-b)*(s-c))

console.log("Area",area)
