/**
=======================================
Array of Objects  Mastery: Invoke Spell
=======================================
[INSTRUKSI]
Kael the Invoker memiliki 3 orb yaitu Quas (q), Wex (w), dan Exort (e). Jika orb ini
dikombinasikan maka akan menghasilkan salah satu dari 10 spell yang berbeda!
Diberikan function invokeSpell yang menerima parameter input, dan spell apa saja yang
dimiliki oleh Invoker sudah disediakan dalam bentuk array.
Function akan mengembalikan nama spell dari input yang dimasukkan oleh user, ex:
- input = 'eeq', output = 'Forge Spirit' (karena q = 1, w = 0, e = 2)
- input = 'www', output = 'EMP' (karena q = 0, w = 3, e = 0)
- input = 'wqz', output = 'Combination does not exist' (karena kombinasi tidak ditemukan)
NOTE:
Meskipun input terbalik atau tidak urut (ex: 'qwe', 'ewq', 'weq'), maka akan tetap mengeluarkan
spell yang sama!
RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
*/

function invokeSpell(input) {
    let counte = 0;
    let countw = 0;
    let countq = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 'e' && input[i] !== 'w' && input[i] !== 'q')
            return 'Combination does not exist';
        else {
            if (input[i] === 'e')
                counte += 1;
            else if (input[i] === 'w')
                countw += 1;
            else
                countq += 1;
        }
    }
    if (countq === 1 && countw === 1 && counte === 1)
        return 'Deafening Blast';
    else if (countq === 1 && countw === 0 && counte === 2)
        return 'Forge Spirit';
    else if (countq === 0 && countw === 3 && counte === 0)
        return 'EMP';
    else if (countq === 3 && countw === 0 && counte === 0)
        return 'Cold Snap';
    else if (countq === 1 && countw === 2 && counte === 0)
        return 'Tornado';
    else if (countq === 0 && countw === 2 && counte === 1)
        return 'Alacrity';
    else if (countq === 0 && countw === 0 && counte === 3)
        return 'Sun Strike'
}

console.log(invokeSpell('qwe')); // Deafening Blast
console.log(invokeSpell('ewq')); // Deafening Blast
console.log(invokeSpell('qqq')); // Cold Snap
console.log(invokeSpell('wwq')); // Tornado
console.log(invokeSpell('wwe')); // Alacrity
console.log(invokeSpell('wew')); // Alacrity
console.log(invokeSpell('wqa')); // Combination does not exist
console.log(invokeSpell('eeq')); // Forge Spirit
console.log(invokeSpell('www')); // EMP
console.log(invokeSpell('wqz')); // Combination does not exist
console.log(invokeSpell('eee')); // Sun Strike

// 12m35s78