const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('data.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`Apakah anda sudah bisa asynchronous: ${line}`);
});
