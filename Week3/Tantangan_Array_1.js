// Claudio Antonius

let word = '"hello world!"';
function balikString(word){
    let reverse = '';
    for (let i = word.length-1; i >= 0; i--) {
        reverse += word[i];
    }
    return reverse;
}
console.log(balikString(word));