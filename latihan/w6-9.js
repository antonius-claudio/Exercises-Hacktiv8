/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)
  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}
  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!
  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate
  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(
  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2
  Selamat berjuang, agen rahasia..
  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !
*/

/* PSEUDOCODE
input = "dimitri"
hurufBiasa = "abcdefghijklmnopqrstuvwxyz"
indexHurufBiasa = []
FOR i = 0, i < input.length
  referenceInput = input[i];
  booleanHurufBiasa = false;
  FOR j = 0, j < hurufBiasa.length
    inspectorHurufBiasa = hurufBiasa[j]
    IF inspectorHurufBiasa === referenceInput THEN
    indexHurufBiasa.push(j)
    booleanHurufBiasa = true
    ENDIF
    j++
  ENDFOR
  IF booleanHurufBiasa !== true THEN indexHurufBiasa.push(" ")
  ENDIF
  i++
ENDFOR
hurufH8BI = "!@#$%^&*()-+1234567890[]{}"
encryptedMessage = ""
FOR k = 0, k < indexHurufBiasa.length
  encryptionKey = indexHurufBiasa[k]
  IF encryptionKey === " " THEN encryptedMessage += input[k]
  ENDIF
  ELSE THEN
    FOR l = 0, l < hurufH8BI.length
      IF encryptionKey === l THEN
        encryptedMessage += hurufH8BI[l]
      ENDIF
      l++
    ENDFOR
  ENDELSE
  k++
ENDFOR
RETURN encryptedMessage
 */
function encrypt(input) {

}


console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
// console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2