const fs = require('fs');

console.log('pertama');


// fs.readFile('data.txt', 'utf8', (err, data) =>{
//     if(err) return console.log('data tidak ditemukan');
    
//     console.log(data);
// })

fs.writeFile('data.txt', 'sudah bisa asynchronous', 'utf8', (err, data) =>{
    if(err) return console.log('data tidak ditemukan');
    console.log(data);
})



console.log('terakhir');

