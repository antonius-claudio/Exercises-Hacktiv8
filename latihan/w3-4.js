// Competencies: Loopings
/*
=================
Horizontal Series
=================
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable max, dimana akan menampilkan deret pengurangan ke kanan hingga mencapai angka 1.
Tampilkan deret sejumlah nilai max.
Buatlah sebuah deret angka horizontal dengan pola berikut:
contoh 1 (max = 3):
321
321
321
contoh 2 (height = 5):
54321
54321
54321
54321
54321
contoh 3 (height = 1):
1
Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
let number = 5;
for (let i = 0; i < number; i++) {
    let dump = '';
    for (let j = 0; j < number; j++){
        dump += j+1;
    }
    console.log(dump);
}

// 7m15s06