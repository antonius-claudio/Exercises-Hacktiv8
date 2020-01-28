// Balik Kata - Claudio Antonius

function balikKata(kata) {
    
    let reverseKata = '';
    for (let i = kata.length; i > 0; i--) {
        reverseKata += kata[i-1];
    }
    return reverseKata;
}
  
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS