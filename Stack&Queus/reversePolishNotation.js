var evalRPN = function (tokens) {
    let stack = []
    for (let i = 0; i<tokens.length; i++) {
        let val = tokens[i]
        if (val == "*" || val == "-" || val == "/" || val == "+") {
            let top_1 = stack.pop()
            let top_2 = stack.pop()
            let res = evaluate(top_2, top_1, val)
            stack.push(res)
        } else {
            stack.push(val)
        }
    }

    return stack[0]


}

const evaluate = (a, b, operator) => {
    switch (operator) {
        case "*":
            return Number(a) * Number(b);

        case "-":
            return Number(a) - Number(b);

        case "/":
            return Math.trunc(Number(a) / Number(b));

        case "+":
            return Number(a) + Number(b);

        default:
            throw new Error("Invalid operator");
    }
};

console.log(evalRPN(["2","1","+","3","*"]))


//SOluito 3 sa logic differe code synatax NamsetDev
var evalRPN = function(arr) {
    let stack = [];
    const map = {
        "+": (a,b) => (b+a),
        "*": (a,b) => (b*a),
        "-": (a,b) => (b-a),
        "/": (a,b) => Math.trunc(b/a),
    };
        for(let i=0; i < arr.length; i++){
            if(map[arr[i]]) {
                let a = stack.pop();
                let b = stack.pop();
                // +a ,+b measn convertign sting to number
                let ans = map[arr[i]](+a,+b);
                stack.push(ans);
            } else {
                stack.push(arr[i]) 
            }
        }
    return Number(stack.pop());
};

