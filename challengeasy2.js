const readline = require('readline');
const fs = require('fs');

const soal = JSON.parse(fs.readFileSync('data.json', 'utf8'));

console.log('Selamat datang di Permainan Tebak Kata, Silahkan isi dengan jawaban yang benar ya!\n');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan : '
});

let index = 0;

console.log(`pertanyaan :${soal[index].definition}`);

rl.prompt();

rl.on('line', (jawabannya) => {
    if (jawabannya.toLowerCase() == soal[index].term.toLowerCase()){
        console.log('Selamat Anda Benar!\n');
        index++;

        if(index == soal.length){
            rl.close();
        }
        console.log(`pertanyaan:${soal[index].definition}`);
    } else {
        console.log('Wkwkwkw, Anda Kurang Beruntung\n');
        
    }
    rl.prompt();
}).on('close', () => {
    console.log('Hore Anda Menang!');
    process.exit(0);
});
