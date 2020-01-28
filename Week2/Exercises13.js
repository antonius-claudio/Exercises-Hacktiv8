// X dan O - Claudio Antonius

function xo(str) {
    let x = 0;
    let o = 0;

    for (let i = 0; i < str.length; i++) {
        (str[i] === 'x') ? x += 1 : o += 1;
    }
    
    return (x === o) ? true : false;;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true