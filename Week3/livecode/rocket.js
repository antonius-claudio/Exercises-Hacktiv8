/**
 * 
 * ================
 * 2 Digit Oddities
 * ================
 * 
 * '1234987566710'
 * 
 * 
 * Pada program ini, kalian harus mengimplementasikan function oddFinder() yang menerima input berupa 'string' berisi angka.
 * String ini pasti diisi oleh angka dan tidak akan diisi oleh huruf/karakter lainnya.
 * Untuk setiap angka 2 digit yang bisa dibentuk dari kiri ke kanan, carilah angka ganjil yang paling besar.
 * Jika tidak ada angka ganjil di dalam string tersebut, maka function akan return 'Tidak ada yang ganjil'
 * 
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN METHOD / FUNCTION KECUALI Number .parseInt
 * - HARUS MENULIS PSEUDOCODE / ALGORITMA, TIDAK MENULIS = 0!
 */


function oddFinder(string) {
   //tulis kode disini
   let cek = '0123456789';
   let count = 0;
   for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < cek.length; j++) {
         if ( string[i] === cek[j])
            count += 1;         
      }
   }
   if( string.length === count){
      let max = 0;
      for (let k = 0; k < string.length-1; k++) {
         let dump = string[k] + string[k+1];
         let numberDump = Number(dump);
         if (numberDump % 2 !== 0)
            if (numberDump > max)
               max = numberDump;
      }
      if (max == 0)
         return 'Tidak ada yang ganjil'
      else
         return max;
   } else {
      return 'String ini pasti diisi oleh angka dan tidak akan diisi oleh huruf/karakter lainnya'
   }
}


console.log(oddFinder('1234987566710')); //87
console.log(oddFinder('246804422')); //Tidak ada yang ganjil