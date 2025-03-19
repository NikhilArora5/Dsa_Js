// converting to lowercase is imp

function titleCase(s) {
    return s.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}

const s = "geeks for geeks";
let t = titleCase(s);
console.log(t);
