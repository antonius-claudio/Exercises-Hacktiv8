/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput 
 * NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here

READ and STORE "nama"
READ and STORE "tahunLahir"
READ and STORE "statusPelajar"
SET "tahunSekarang = 2020"
SET "tiketDasar = 25000"
SET "harga = 0"

IF ((tahunSekarang - tahunLahir) < 2)
    DO  harga = 0
ELSE IF ((tahunSekarang - tahunLahir) >= 2 && (tahunSekarang - tahunLahir) <= 10 )
    DO harga = 1 * tiketDasar
ELSE if ((tahunSekarang - tahunLahir) >= 11 && (tahunSekarang - tahunLahir) <= 18)
    DO  IF (statusPelajar !== 'pelajar')
            DO harga = 1.5 * tiketDasar
        ELSE harga = 1.25 * tiketDasar
        END IF
ELSE IF ((tahunSekarang - tahunLahir) >= 19 && (tahunSekarang - tahunLahir) < 120)
    DO  IF (statusPelajar !== 'pelajar')
            DO harga = 2 * tiketDasar
        ELSE harga = 1.5 * tiketDasar
        END IF
ELSE IF ((tahunSekarang - tahunLahir) >= 120 || tahunLahir < 1900)
    DO DISPLAY "Invalid Age"
    BREAK
END IF

IF (harga !== 0)
    DO
        DISPLAY nama
        DISPLAY harga
ELSE 
    DISPLAY nama
    DISPLAY 'HARGA TIKET GRATIS'
END IF