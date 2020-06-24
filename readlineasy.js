const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tuliskan nama mobil kamu :'
});

rl.prompt();

rl.on('line', (jawaban) => {
  switch (jawaban.trim()) {
    case 'bmw':
      console.log('wah mobil bagus itu');
      rl.close();
      break;
    default:
      console.log(`'${jawaban.trim()}'itu mobil jelek`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('udahan ya !');
  process.exit(0);
});
