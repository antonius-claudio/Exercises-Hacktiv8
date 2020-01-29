// Claudio Antonius

// manual
function palindrome(kata){
    let reverse = '';
    for (let i = kata.length ; i > 0; i--) {
        reverse += kata[i-1];        
    }
    return (kata === reverse) ? true : false;
}

// inbuilt function
// function palindrome(kata){
//     let reverse = kata.split('');
//     reverse = reverse.reverse();
//     reverse = reverse.join('');
//     return (kata === reverse) ? true : false;
// }

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false