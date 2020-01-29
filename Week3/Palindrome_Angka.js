// Claudio Antonius

// manual
function angkaPalindrome(angka){
    // variable untuk check sudah palindrome atau belum
    let condition = false;
    
    // looping mulai dari angka 1 berikutnya bertambah 1 sampai kondisi true atau polindrome
    for (let i = (angka+1); condition==false ; i++) {
        // mengubah angkaNext menjadi string agar bisa dibalik
        let stringAngkaNext_i = '';
        stringAngkaNext_i = `${i}`;
        // variable untuk reverse
        let reverseNext_i = '';

        // looping untuk reverse kata
        for (let j = stringAngkaNext_i.length; j > 0; j--) {
            reverseNext_i += stringAngkaNext_i[j-1];
        }
        // console.log(reverseNext_i);
        // console.log(stringAngkaNext_i);

        // untuk cek palindrome atau belum
        if (stringAngkaNext_i === reverseNext_i) {
            // console.log(stringAngkaNext_i);
            condition = true;
            return stringAngkaNext_i
        }
    }
}

// // inbuilt function
// function angkaPalindrome(angka){
//     // variable untuk check sudah palindrome atau belum
//     let condition = false;
    
//     // looping mulai dari angka 1 berikutnya bertambah 1 sampai kondisi true atau polindrome
//     for (let i = (angka+1); condition==false ; i++) {
//         // mengubah angkaNext menjadi string agar bisa dibalik
//         let stringAngkaNext_i = i.toString();
//         // variable untuk reverse
//         let reverseNext_i = stringAngkaNext_i;

//         reverseNext_i = reverseNext_i.split('');
//         reverseNext_i = reverseNext_i.reverse();
//         reverseNext_i = reverseNext_i.join('');

//         // untuk cek palindrome atau belum
//         if (stringAngkaNext_i === reverseNext_i) {
//             condition = true;
//             return stringAngkaNext_i
//         }
//     }
// }

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001