const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini> '
});

rl.prompt();

rl.on('line', (jawabannya) => {
    console.log(`hasil konversi : ${sentenceManipulation(jawabannya)}`);
    rl.prompt();
}).on('close', () => {
    console.log('Good bye!');
    process.exit(0);
});

function stringManipulation(word) {
    if (word.charAt(0).toLowerCase() == 'a' ||
        word.charAt(0).toLowerCase() == 'i' ||
        word.charAt(0).toLowerCase() == 'u' ||
        word.charAt(0).toLowerCase() == 'e' ||
        word.charAt(0).toLowerCase() == 'o') {
        return word;
    } else {
        return word.slice(1) + word.charAt(0) + 'nyo'
    }
}

function sentenceManipulation(sentence) {
    let words = sentence.split(' ');
    let result = [];
    for (var i = 0; i < words.length; i++) {
        result.push(stringManipulation(words[i]));
    }
    return result.join(' ');
}






