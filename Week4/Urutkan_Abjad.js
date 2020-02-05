// Claudio Antonius

function urutkanAbjad(str) {
    let abjad = 'abcdefghijklmnopqrstuvwxyz';
    let newStr = '';
    // untuk mencari huruf" sesuai abjad, sehingga mencari semua huruf tertentu dan memasukannya dalam string baru
    for (let i = 0; i < abjad.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (abjad[i] === str[j])
                newStr += str[j];
        }
    }
    return newStr;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'