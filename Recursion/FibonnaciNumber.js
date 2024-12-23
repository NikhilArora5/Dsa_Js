/**
 * My try to solve using recursion 
 * Conceot was to first have a initial FIb =[0,1] which can be passsed as argument as in recusrion can initialize the value because the sme function will run
 * But failed with only providing the number like funct(6) shpuld return 8
 * 
 * as for fib[6] [0,1,1,2,3,5,8] =8 
 * 
 * TIME COMPLEXITY 
 * check the recursive pattern count how many time the function is called with respect to the given n
 * Then the pattern comes is 2,4,,8,16, 32,64 ......
 *  Big O() follows 2Power n    
 * 
 * @param {*} n 
 * @returns 
 */


const recursiveFibonanciNumber=(n)=>{
    // if 0,1 then return 0 and 1 as fib[0]=0 ,fib[1]=1
    if(n<2){
        return n
    }
    // As the pattern or formula for fibonnaci Fn=Fn-1 + Fn-2
    return recursiveFibonanciNumber(n-1) + recursiveFibonanciNumber(n-2)
}