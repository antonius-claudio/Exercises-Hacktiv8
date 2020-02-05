// Claudio Antonius

function ubahHuruf(kata) {
    let arrAlpha = 'abcdefghijklmnopqrstuvwxyz';
    let newKata = '';
    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < arrAlpha.length; j++) {
            if (kata[i] === arrAlpha[j]) {
                if (kata[i] === 'z')            
                    newKata += 'a';
                else
                    newKata += arrAlpha[j+1]
            }
        }
    }
    return newKata;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

console.log(ubahHuruf('zzsemangatzz')); // aatfnbohbuaa
