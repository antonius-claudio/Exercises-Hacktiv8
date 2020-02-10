// Claudio Antonius

function totalDigitRekursif(angka) {
    // you can only write your code here!
    let strAngka = String(angka);
    if (strAngka.length === 1)
        return Number(strAngka[0]);
    else
        return Number(strAngka[0]) + totalDigitRekursif(strAngka.slice(1, strAngka.length));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5