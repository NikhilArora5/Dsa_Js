/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[]

    let n=s.length

    if(n%2!==0) return false

    let openBrackets=["(","[","{"]
    

     for(let i=0;i<s.length;i++){
        let top=stack[stack.length-1]
        if(openBrackets.includes(s[i])){
            stack.push(s[i])
        }else if(s[i]==")" && top=="("){
            stack.pop()
        }
        else if(s[i]=="]" && top=="["){
            stack.pop()
        }
        else if(s[i]=="}" && top=="{"){
            stack.pop()
        }else{
            stack.push(s[i])
        }
     }


     return stack.length==0
    
};