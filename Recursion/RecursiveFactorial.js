/**
 * Edge cases: Fr case of n=0 return 1 as factorial of 0 is 1
 * time complexity O(n)
 */

const recursiveFactorial=(n)=>{

    if(n==0){
        return 1
    }

    return n*recursiveFactorial(n-1)

}


console.log("recursiveFactorial(5)",recursiveFactorial(6))