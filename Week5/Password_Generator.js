// Claudio Antonius

function changeVocals (str) {
    //code di sini
    let alphaLower = 'abcdefghijklmnopqrstuvwxyz';
    let alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o') {
            for (let j = 0; j < alphaLower.length; j++) {
                if (str[i] === alphaLower[j]) {
                    newStr += alphaLower[j+1];
                }                
            }
        } else if (str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O') {
            for (let j = 0; j < alphaUpper.length; j++) {
                if (str[i] === alphaUpper[j]) {
                    newStr += alphaUpper[j+1];
                }                
            }
        } else newStr += str[i];
    }
    return reverseWord(newStr);
}

function reverseWord (str) {
    //code di sini
    let newStr = '';
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return setLowerUpperCase(newStr);
}

function setLowerUpperCase (str) {
    //code di sini
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase())
            newStr += str[i].toUpperCase();
        else newStr += str[i].toLowerCase();        
    }
    return removeSpaces(newStr);
}

function removeSpaces (str) {
    //code di sini
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ')
            newStr += str[i];
    }
    if (newStr.length >= 5)
        return newStr;
    else
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
}

function passwordGenerator (name) {
    //code di sini
    return changeVocals(name);
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'