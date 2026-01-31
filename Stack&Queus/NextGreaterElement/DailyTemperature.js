var dailyTemperatures = function (temperatures) {
    let result = []
    let stack = []
    let n = temperatures.length
   
    let prev = temperatures[n - 1]
    result.push(0)
    stack.push([prev, n - 1])
// console.log("stack",stack)
    for (let i = n - 2; i >= 0; i--) {
         console.log(stack)
        let curr = temperatures[i]
        if (prev > curr) {
           
            let [top, index] = stack[stack.length - 1]
                    
            
            let diff = index - i
            stack.push([curr, i])
            result.push(diff)
            prev=curr
        } else {

            stack.pop()

            while (stack.length) {
                // let top = stack[stack.length - 1]
                let [top, index] = stack[stack.length - 1]
                if (top > curr) {
                    console.log("got warm",[top, index])
                    console.log("pushhing",[curr,index-i])
                    let diff = index - i
                    stack.push([curr, i])
                    result.push(diff)
                  
                    break
                } else {
                    stack.pop()
                }


            }

            if (stack.length == 0) {
                result.push(0)
                 stack.push([curr, i])
            }
              prev=curr
        }
    }


    return result.reverse()


};

console.log(dailyTemperatures([30,40,50,60]))