var isPalindrome = function (s) {
    let filteredString = ""

    for (let i = 0; i < s.length; i++) {
        let lowerCaseStr = s[i].toLowerCase()
        console.log("lowerCaseStr",lowerCaseStr)
        // alphanumeric a-z ,A-Z , 0-9 inlcude zero as well
        // for better efficiency use exact numbers if you remember charCodet values
    
        // let code = ch.charCodeAt();
        // Check if alphanumeric: 'a'-'z' or '0'-'9'
        // if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
        //     filteredString += ch;
        // }

        if (lowerCaseStr.charCodeAt() >= "a".charCodeAt() && lowerCaseStr.charCodeAt() <= "z".charCodeAt() || lowerCaseStr.charCodeAt() >= "0".charCodeAt() && lowerCaseStr.charCodeAt() <= "9".charCodeAt()) {
            filteredString += lowerCaseStr
            console.log("lowerCaseStr",lowerCaseStr)
        }
    }



    let low = 0
    let high = filteredString.length - 1

    while (low < high) {
        if (filteredString[low] !== filteredString[high]) {

            return false
        }
        low++
        high--
    }

    return true
};

isPalindrome("race a car")