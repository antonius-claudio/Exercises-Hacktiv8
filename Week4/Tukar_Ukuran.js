// Claudio Antonius

function tukarBesarKecil(kalimat) {
    let abjadKecil = 'abcdefghijklmnopqrstuvwxyz';
    let abjadBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newKalimat = '';
    for (let i = 0; i < kalimat.length; i++) {
        // for (let j = 0; j < abjadKecil.length; j++) {
        //     if (kalimat[i] === abjadKecil[j])
        //         newKalimat += abjadBesar[j];
        //     else if (kalimat[i] === abjadBesar[j])
        //         newKalimat += abjadKecil[j];
        //     // else newKalimat += kalimat[i];
        // }        
        if (kalimat[i] === kalimat[i].toUpperCase()){
            newKalimat+= kalimat[i].toLowerCase()
        } else {
            newKalimat += kalimat[i].toUpperCase()
        }
    }
    return newKalimat;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"