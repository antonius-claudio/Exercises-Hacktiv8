// Claudio Antonius

function angkaPrima(angka) {
    if (angka !== 0){
        let temp = [];
        for (let i = 1; i <= angka; i++) {
            if(angka%i===0)
                temp.push(i)
        }
        if (temp.length === 2)
            return true;
        else
            return false;
    } else
        return false;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
// console.log(angkaPrima(0)); // false