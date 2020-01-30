// Claudio Antonius

// manual
function hitungJumlahKata(kalimat) {
    let kata_ke = [''];
    let count = 0;

    for (let i = 0; i < kalimat.length; i++) {

        if (kalimat[i] !== ' ') {
            kata_ke[count] += kalimat[i];
        } else {
            // membuat index pada array
            count += 1;
            // bila array spasi, maka di isi '' bukan kosong (undefined)
            kata_ke[count] = '';
        }
    }
    return count+1;
    // return kata_ke;
}

// // inbuilt function
// function hitungJumlahKata(kalimat) {
//     kalimat.split(' ');
//     return kalimat.split(' ').length;
// }

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5