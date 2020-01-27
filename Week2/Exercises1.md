## 1. Newton Second Law

    READ and SET m to 600;
    READ and SET a to 2;
    COMPUTE F as m * a;
    DISPLAY F;

------------------------------------------------------------------------------

## 2. Tahun Kabisat

    READ and SET tahun;
    IF tahun modulo 4 is 0;
        DO IF tahun modulo 100 is 0;
            DO IF tahun modulo 400 is 0;
                DISPLAY "Kabisat";
            ELSE 
                DISPLAY "!Kabisat";
            END IF
        ELSE 
            DISPLAY "Kabisat";
        END IF
    ELSE 
        DISPLAY "!Kabisat";
    END IF

------------------------------------------------------------------------------

## 3. Laundry Day

    READ and SET total to 20;
    SET Count to 0;
    WHILE Count < total
        DISPLAY Count + 1
        ADD COUNT by 1
    END WHILE

------------------------------------------------------------------------------

## 4. Periksa Kuku

    READ and SET total to 40
    SET i to 0
    WHILE i < total
        IF kuku siswa ke i == kuku panjang
            DO  DISPLAY "Menghukum siswa"
        ELSE 
            DISPLAY "Memuji siswa"
        END IF
    ADD i by 1
    END WHILE
