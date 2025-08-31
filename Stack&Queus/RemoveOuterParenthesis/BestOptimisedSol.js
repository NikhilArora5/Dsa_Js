// 1.-----------------CONSTANT SPACE------------
var removeOuterParentheses = function(s) {
    let level = 0;
    let ans = "";
    for (const char of s) {
        if (char === "(") {
            if (level++ > 0) ans += char; // Include if nested
        } else {
            if (level-- > 1) ans += char; // Include if nested
        }
    }
    return ans;
};

//2.-----------with Stack
var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";
    for (const char of s) {
        if (char === "(") {
            if (stack.length > 0) ans += char; // Include if not outermost
            stack.push(char);
        } else {
            stack.pop();
            if (stack.length > 0) ans += char; // Include if not outermost
        }
    }
    return ans;
};