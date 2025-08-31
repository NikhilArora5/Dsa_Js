var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer to next alphanumeric
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        // Move right pointer to previous alphanumeric
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

// Helper function to check if character is alphanumeric
function isAlphaNumeric(c) {
    let code = c.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) ||     // '0' to '9'
        (code >= 65 && code <= 90) ||     // 'A' to 'Z'
        (code >= 97 && code <= 122)       // 'a' to 'z'
    );
}
