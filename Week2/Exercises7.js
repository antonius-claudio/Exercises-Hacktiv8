// Play with Asterisks - Claudio Antonius

// 1. Menyusun Barisan Bintang
console.log('1. Menyusun Barisan Bintang');
let rows1 = 5;

for (let index = 0; index < rows1; index++) {
    console.log('*');
}
console.log('----------------------------------');

// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');
let rows2 = 5;
let line;

for (let index = 0; index < rows2; index++) {
    line = '';
    for (let index2 = 0; index2 < rows2; index2++) {
        line += '*';
    }
    console.log(line);
}
console.log('----------------------------------');

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
let rows3 = 5;
let line_soal3;

for (let index = 0; index < rows3; index++) {
    line_soal3 = '';
    for (let index2 = 0; index2 <= index; index2++) {
        line_soal3 += '*';
    }
    console.log(line_soal3);
}