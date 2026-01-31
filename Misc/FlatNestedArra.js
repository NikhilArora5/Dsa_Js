//for ested levels
/*
flat() → same as flat(1)

flat(2) → flattens 2 levels

flat(Infinity) → flattens all levels
/*/
const flat = ar.flat(Infinity);
console.log(flat);
// [1, 2, 3, 4, 5, 6, 7, 8]


//interview
//[].concat(1) → [1]
//recursio happens
function flatten(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(
      Array.isArray(val) ? flatten(val) : val
    );
  }, []);
}

console.log(flatten(ar));
