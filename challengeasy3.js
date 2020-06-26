const readline = require('readline');
const fs = require('fs');
const { count } = require('console');

if (!process.argv[2]) {
    console.log('Tolong sertakan nama file sebagai inputan soalnya');
    console.log('Misalnya `nodesolution.js data.json`');

    process.exit(1);
}

let soal = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

console.log('Selamat datang di Permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini `data.json`.');
console.log('Untuk Bermain, Jawablah dengan jawaban yang sesuai.');
console.log('Gunakan `skip` untuk menangguhkan pertanyaannya, dan diakhir pertanyaan akan ditanyakan lagi.');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban : '

});

let index = 0;
let salah = 0;

console.log(`pertanyaan :${soal[index].definition}`);

rl.prompt();

rl.on('line', (jawabannya) => {
    if (jawabannya.toLowerCase() == 'skip') {
        soal.push(soal[index])

        index++;

        console.log(`pertanyaan:${soal[index].definition}`);
    } else {
        if (jawabannya.toLowerCase() == soal[index].term.toLowerCase()) {
            console.log('Anda Beruntung!\n');
            salah = 0;

            index++;

            if (index == soal.length) {
                rl.close();
            }
            console.log(`pertanyaan:${soal[index].definition}`);
        } else {
            salah++;
            console.log(`Anda kurang Beruntung! anda telah salah ${salah}, silahkan coba lagi.`);
        }
    }
    rl.prompt();
}).on('close', () => {
    console.log('Anda Berhasil!');
    process.exit(0);
});
