// Claudio Antonius

function checkAB(num) {
    let count = 0;
    let temp = false;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === 'a' || num[i] === 'b') {
            for (let j = i+1; j < num.length; j++) {
                if ((num[i] === 'a' && num[j] === 'b') || (num[i] === 'b' && num[j] === 'a'))
                    if (j-i === 4)
                        temp = true;
            }
        }
    }
    return temp;

    // cara 2
    // for (let i = 0; i < num.length; i++) {
    //     if (num[i] === 'a' && num[i+4] === 'b'){
    //         return true
    //     } else if (num[i] === 'b' && num[i+4] === 'a'){
    //         return true
    //     } 
    // }
    // return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false