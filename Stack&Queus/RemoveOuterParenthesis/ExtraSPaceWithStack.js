



//Time and space O(n) worst case
//optimized
//Inefficiency in substring Calls
//Frequent substring concatenation (result += ...) could be optimized with an array and .join().
var removeOuterParentheses = function(s) {
    let stack = [];
    let result = [];
    let lastIdx = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            stack.pop();
        }

        if (stack.length === 0) {
            result.push(s.slice(lastIdx + 1, i)); // Skip outer parentheses
            lastIdx = i + 1;
        }
    }

    return result.join('');
};



//initially implemented and passed
var removeOuterParentheses = function (s) {
    let stack = []
    let result = ""
    let lastIdx = 0


    let n = s.length

    if (n % 2 !== 0) return false

    let openBrackets = ["(", "[", "{"]




    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1]
        if (openBrackets.includes(s[i])) {
            stack.push(s[i])
        } else if (s[i] == ")" && top == "(") {
            stack.pop()
        }
        else if (s[i] == "]" && top == "[") {
            stack.pop()
        }
        else if (s[i] == "}" && top == "{") {
            stack.pop()
        }

        
        //primitive string found
        if (stack.length == 0) {
            result += s.substring(lastIdx + 1, i)
            console.log("pair", s.substring(lastIdx + 1, i))
            lastIdx = i + 1
        }


    }


    return result
};

console.log(removeOuterParentheses("(()())(())(()(()))"))