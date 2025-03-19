
/**
 * 
 * @param {*} str 
 * @returns 
 * 
 * ('a'.charCodeAt(0) - 'A'.charCodeAt(0)) gives +32
 * ('A'.charCodeAt(0) - 'a'.charCodeAt(0)) gives -32
 *  so thers is a differenc eof 32 for a to be converted to A
 * we can directly use uppercase and lower case as well
 * FromCharCode(Ascci value)  gives the character
 * CharCOdeAt(character) gives Ascii value
 * a>A true as small case has higjer Ascci values
 * Given the conditions bewl special character don get into tat range
 * 
 */


function toggleChars(str) {
    return str.split("").map(char => {
        if (char >= 'A' && char <= 'Z')
            return String.fromCharCode(char.charCodeAt(0) + ('a'.charCodeAt(0) - 'A'.charCodeAt(0)));
        else if (char >= 'a' && char <= 'z')
            return String.fromCharCode(char.charCodeAt(0) + ('A'.charCodeAt(0) - 'a'.charCodeAt(0)));
        return char;
    }).join("");
}









function checkChar(char) {
    if (char >= 'A' && char <= 'Z') {
        console.log(`${char} is an uppercase letter`);
    } else if (char >= 'a' && char <= 'z') {
        console.log(`${char} is a lowercase letter`);
    } else {
        console.log(`${char} is a special character or number`);
    }
}

checkChar('G'); // "G is an uppercase letter"
checkChar('g'); // "g is a lowercase letter"
checkChar('@'); // "@ is a special character or number"
checkChar('5'); // "5 is a special character or number"
