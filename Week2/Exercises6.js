// Looping - Claudio Antonius

// 1. Melakukan Looping Menggunakan While
console.log('1. Melakukan Looping Menggunakan While');
let count = 20;
let i = 0;

console.log('LOOPING PERTAMA');
while (i < count) {
    if ((i+1) % 2 === 0)
        console.log((i+1) + ' - I love coding');
    i++;
}

console.log('LOOPING KEDUA');
while (i > 0) {
    if ((i+1) % 2 === 0)
        console.log((i+1) + ' - I will become fullstack developer');
    i--;
}
console.log('------------------------------------------------------------');

// 2. Melakukan Looping Menggunakan For
console.log('2. Melakukan Looping Menggunakan For');
console.log('LOOPING PERTAMA');
for (i; i < count; i++) {
    console.log((i+1) + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (i; i > 0; i--) {
    console.log(i + ' - I will become fullstack developer');
}
console.log('------------------------------------------------------------');

// 3. Angka Ganjil dan Genap
console.log('3. Angka Ganjil dan Genap');
for (let index = 1; index <= 100; index++) {
    (index % 2 === 0) ? console.log('GENAP, Counter sekarang = ' + index) : console.log('GANJIL, Counter sekarang = ' + index);
}
console.log('');
console.log('Perulangan counter 2')
for (let index = 1; index <= 100; index+=2) {
    (index % 3 === 0) ? console.log(index + ' KELIPATAN 3') : console.log('');
}
console.log('');
console.log('Perulangan counter 5')
for (let index = 1; index <= 100; index+=5) {
    (index % 6 === 0) ? console.log(index + ' KELIPATAN 6') : console.log('');
}
console.log('');
console.log('Perulangan counter 9')
for (let index = 1; index <= 100; index+=9) {
    (index % 10 === 0) ? console.log(index + ' KELIPATAN 10') : console.log('');
}