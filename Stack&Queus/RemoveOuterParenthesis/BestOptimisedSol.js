// 1.-----------------CONSTANT SPACE------------
var removeOuterParentheses = function(s) {
    let level = 0;   // Tracks how deep we are inside parentheses
    let ans = "";

    for (const char of s) {
        if (char === "(") {
            /**
             * post-increment (level++)
             * -------------------------
             * 1. The expression returns the current value of level.
             * 2. THEN level is incremented by 1.
             *
             * Example:
             *   If level = 0 → (level++ > 0) → (0 > 0) false → skip this "("
             *       then level becomes 1.
             *   If level = 1 → (level++ > 0) → (1 > 0) true  → include this "("
             *       then level becomes 2.
             */
            if (level++ > 0) {
                ans += char; // Only add if we were already inside (nested)
            }
        } else {
            /**
             * post-decrement (level--)
             * -------------------------
             * 1. The expression returns the current value of level.
             * 2. THEN level is decremented by 1.
             *
             * Example:
             *   If level = 1 → (level-- > 1) → (1 > 1) false → skip this ")"
             *       then level becomes 0.
             *   If level = 2 → (level-- > 1) → (2 > 1) true  → include this ")"
             *       then level becomes 1.
             */
            if (level-- > 1) {
                ans += char; // Only add if we were deeper than 1
            }
        }
    }

    return ans;
};

//2.-----------with Stack
var removeOuterParentheses = function(s) {
    let stack = [];   // Stack to track open parentheses
    let ans = "";     // Result string (without outermost parentheses)

    for (const char of s) {
        if (char === "(") {
            // If it's an opening bracket:
            // Only add to result if it's NOT the first "(" of a primitive substring
            if (stack.length > 0) ans += char;
            stack.push(char); // Push to stack to track balance
        } else {
            // If it's a closing bracket ")"
            stack.pop(); // Remove the last "(" since we found its pair

            // If stack is still not empty, this ")" is NOT the outermost one
            // → so we keep it in the result
            if (stack.length > 0) ans += char;

            // If stack becomes empty, it means this ")" closed the OUTERMOST "("
            // → so we skip adding it
        }
    }

    return ans;
};
