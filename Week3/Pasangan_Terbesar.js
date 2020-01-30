// Claudio Antonius

function pasanganTerbesar(num) {
    let stringNum = `${num}`;
    let maxNum = '';

    for (let i = 0; i < stringNum.length-1; i++) {
        if (stringNum[i]+stringNum[i+1] > maxNum) {
            maxNum = stringNum[i]+stringNum[i+1];
        }
    }
    return maxNum;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99