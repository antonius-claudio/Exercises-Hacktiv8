// Claudio Antonius

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

// latihan splice
console.log('-----------------------------');
function dataHandling2(input) {
    // update array[1] nama
    input.splice(1, 1, 'Roman Alamsyah Elsharawy');
    // update array[2] provinsi
    input.splice(2, 1, 'Provinsi Bandar Lampung');
    // add array[4] jenis kelamin
    input.splice(4, 0, 'Pria');
    // update array[5] Sekolah
    input.splice(5, 1, 'SMA Internasional Metro');
}
dataHandling2(input);
console.log(input);

// latihan split
console.log('-----------------------------');
let date = input[3].split('/');
switch (date[1]) {
    case '01':
        console.log('Januari');
        break;
    case '02':
        console.log('Februari');
        break;
    case '03':
        console.log('Maret');
        break;
    case '04':
        console.log('April');
        break;
    case '05':
        console.log('Mei');
        break;
    case '06':
        console.log('Juni');
        break;
    case '07':
        console.log('Juli');
        break;
    case '08':
        console.log('Agustus');
        break;
    case '09':
        console.log('September');
        break;
    case '10':
        console.log('Oktober');
        break;
    case '11':
        console.log('November');
        break;
    case '12':
        console.log('Desember');
        break;
}

// latihan sort
console.log('-----------------------------');

console.log(date.sort(function(value1, value2) { return (value2 - value1) }));

// latihan join
console.log('-----------------------------');

let date2 = input[3].split('/');

console.log(date2.join('-'));

// latihan slice
console.log('-----------------------------');

console.log(input[1].slice(0,15));