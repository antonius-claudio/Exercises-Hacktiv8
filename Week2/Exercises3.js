// Proxytia - Claudio Antonius
// peran : Ksatria, Tabib, dan Penyihir

// let nama;
let nama = '';
// let nama = 'Nina';

// let peran;
let peran = '';
// let peran = 'Ksatria';
// let peran = 'Tabib';
// let peran = 'Penyihir';



if ((nama === '' || nama === undefined) && (peran === '' || peran === undefined)) 
    console.log('Pilih Nama dan Peranmu untuk memulai game');
// else if ((nama === '' || nama === undefined) && (peran !== '' || peran !== undefined)) // panjang
else if (nama === '' || nama === undefined) // pendek
    console.log('Nama harus diisi!');
// else if ((peran === '' || peran === undefined) && (nama !== '' || nama !== undefined)) // panjang
else if (peran === '' || peran === undefined) // pendek
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
else {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    if (peran === 'Ksatria')
        console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
    else if (peran === 'Tabib')
        console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
    else
        console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}
