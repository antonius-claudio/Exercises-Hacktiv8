/**
 * Instruksi
 *
 * ===============
 * Count Stuff
 * ===============
 *
 * Pada program ini kalian harus mencari beberapa hal yang terdapat di dalam sebuah string.
 * Kalian diberikan 2 input, 'line' dan 'param'.
 * String line berisi angka (0-9), huruf (lowercase) atau karakter lain yang sembarang ('/', '#', '@', '$', dll). String ini merupakan string yang akan kalian proses.
 * Contoh line: '123abcdfghi9657$%^&*'
 * String param berisi parameter yang akan menentukan barang yang kalian cari di dalam string tersebut.
 * param bisa berupa: - 'sigma'
 *                         jika param berupa sigma, maka jumlahkan semua angka di dalam string.
 *                     - 'letters'
 *                         jika param berupa letters, maka carilah jumlah huruf di dalam string.
 *                     - 'length'
 *                         jika param berupa length, maka program akan mengoutput panjang dari elemen string yang berupa huruf dan angka.
 *                     - Selain ketiga param diatas, maka program akan mengoutput 'Parameter salah'
 * Contoh
 *
 * 1.
 * 'line' : 'abcdefghijklmonjasd'
 * 'param': 'letters'
 *
 * Output: 19
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'sigma'
 *
 * Output: 0
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'length'
 *
 * Output: 19
 *
 * 2. line: 'abcde12345
 *
 * param : 'sigma'
 *
 * Output: 15
 *
 * line: 'abcde12345
 *
 * param : 'length'
 *
 * Output: 10
 *
 * RULES :
 * - HANYA BOLEH MENGGUNAKAN BUILT-IN METHOD / FUNCTION dari tipe data Number
 *
 */

var line = 'abcde12345'; //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya
var param = 'length'; //kalian bisa mengisi param ini dengan 'sigma', 'letters', 'length', dll

//tulis kode kalian disini
let cekAlpha = 'abcdefghijklmnopqrstuvwxyz';
let cekNumber = '0123456789'

function test (line, param) {
    let count = 0;
    if (param == 'letters') {
        for (let i = 0; i < line.length; i++) {
            for (let j = 0; j < cekAlpha.length; j++) {
                if (line[i] === line[j]){
                count += 1;
                }
            }
        }
        console.log(count)
    } else if (param == 'sigma') {
        for (let i = 0; i < line.length; i++) {
            for (let j = 0; j < cekNumber.length; j++) {
                if (line[i] === cekNumber[j]) {
                    count += (Number(line[i]));
                }
            }
        }
        console.log(count);
    } else if (param === 'length'){
        console.log(line.length);
    } else {
        console.log('Parameter salah');
    }

}

test(line, param);