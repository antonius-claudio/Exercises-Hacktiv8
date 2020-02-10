// Claudio Antonius

function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (angka < 10 && angka >= 0)
        return angka;
    else {
        return kaliTerusRekursif(cekHasil(angka));
    }
}

function cekHasil(angka) {
    let strAngka = String(angka);
    if (strAngka.length === 1)
        // return Number(strAngka[0]);
        return angka;
    else {
        return Number(strAngka[0]) * cekHasil(Number(strAngka.slice(1)));
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6