// Claudio Antonius

function fpb(angka1, angka2) {
    // variable simpan faktor tiap angka
    let faktor1 = faktor(angka1);
    let faktor2 = faktor(angka2);

    // karena sama, bisa dijadikan function lain
    // // mencari faktor variable angka1
    // for (let i = 1; i <= angka1; i++) {
    //     if (angka1%i===0)
    //         faktor1.push(i);
    // }
    // // mencari faktor variable angka 2
    // for (let j = 1; j <= angka2; j++) {
    //     if (angka2%j===0)
    //         faktor2.push(j);      
    // }

    // mencari fpb
    let fpb = 0;
    for (let k = 0; k < faktor1.length; k++) {
        for (let l = 0; l < faktor2.length; l++) {
            if(faktor1[k] === faktor2[l]){
                fpb = faktor1[k];
            }            
        }        
    }
    return fpb;
}

function faktor(number) {
    let temp = [];
    for (let i = 1; i <= number; i++) {
        if (number%i===0)
            temp.push(i);
    }
    return temp;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1