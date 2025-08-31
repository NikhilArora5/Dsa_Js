var removeOuterParentheses = function(s) {
    //use a balance counter for tracking a primitve pair
    let balanceCount=0;
    let result = [];
    let lastIdx = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            balanceCount++;
        } else if (s[i] === ')') {
            balanceCount--
        }

        if (balanceCount === 0) {
            result.push(s.slice(lastIdx + 1, i)); // Skip outer parentheses
            lastIdx = i + 1;
        }
    }

    return result.join('');
};